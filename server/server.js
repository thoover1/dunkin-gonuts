require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const stripe = require("stripe")("sk_test_fxb0xX8CJsVV3SSX4gvc1zJQ009XofoGRo");
const uuid = require("uuid/v4");
const ic = require("./controllers/inventoryCtrl");
const uc = require("./controllers/userCtrl");
const cc = require("./controllers/cartCtrl");
// require once Ctrl file is completed
// const phc = require("./controllers/purchaseHistoryCtrl");

// const auth = require('./middleware/authMiddleware')
// const aws = require("aws-sdk");
// const config = require("./config/s3.config");

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

const app = express();

// for static server - doesn't work yet
app.use(express.static(`${__dirname} /../build`));

app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365
    }
  })
);
// used for stripe checkout sending info
app.post("/checkout", async (req, res) => {
  let error;
  let status;
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    // console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    // console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});
// connects server to postgreSQL
massive(CONNECTION_STRING).then(db => {
  console.log("database connected");
  app.set("db", db);
});

// endpoints for login/logout/registering
app.post("/auth/register", uc.register);
app.post("/auth/login", uc.login);
app.get("/auth/userSession", uc.userSession);
app.delete("/auth/logout", uc.logout);

// only allows users with profile to use app - psuedo-middleware
app.use((req, res, next) => {
  if (req.session.user) return next();
  else res.sendStatus(401);
});

// used for products

// endpoint to display specific inventory lists
app.get("/api/inventory", ic.getInventory);
app.get("/api/inventory/donuts", ic.getDonutInventory);
app.get("/api/inventory/drinks", ic.getDrinkInventory);
app.get("/api/inventory/sandwiches", ic.getSandwichInventory);
app.get("/api/inventory/cards", ic.getCardInventory);

// endpoint to display cart
app.get("/api/cart", cc.getEntireCart);
app.get("/api/scrolling_cart", cc.getScrollingCart);

// endpoints that add functionality to Buy component
app.post("/api/button_add_to_cart", cc.buttonAddToCart);
app.post("/api/button_subtract_from_cart", cc.buttonSubstractFromCart);
app.post("/api/input_add_to_cart", cc.inputAddToCart);

// endpoints that add functionality to Cart component
app.put("/api/input_update_cart/:cart_id/", cc.inputUpdateCart);
app.delete("/api/delete_from_cart/:cart_id/", cc.deleteFromCart);
app.delete("/api/after_purchase_wipe_cart/:user_id/", cc.afterPurchaseWipeCart);

// aws download file - grokonoz video - not working
// const awsWorker = require("./controllers/s3.controler.js");
// app.get(`api/menu/:filename`, awsWorker.doDownload);
// module.exports = app;
// (async function() {
//   try {
//     aws.config.setPromisesDependency();
//     aws.config.update({
//       accessKeyId: config.aws.accessKey,
//       secretAccessKey: config.aws.secretKey,
//       region: "us-west-1"
//     });
//     const s3 = new aws.S3();
//     const response = await s3
//       .listObjectsV2({
//         Bucket: "dunkin-donuts"
//       })
//       .promise();
//     console.log(response);
//   } catch (e) {
//     console.log("error here", e);
//   }
// })();
// debugger;

// const path = require("path");
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });

app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});
