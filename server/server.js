require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const ic = require("./controllers/inventoryCtrl");
const uc = require("./controllers/userCtrl");
const cc = require("./controllers/cartCtrl");
// require once Ctrl file is completed
// const phc = require("./controllers/purchaseHistoryCtrl");

// const auth = require('./middleware/authMiddleware')
// const aws = require("aws-sdk");
// const config = require("./config/s3.config");

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

// for static server - doesn't work yet
app.use(express.static(__dirname + "/../build"));

const app = express();
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

// only allows users with profile to use app
// app.use((req, res, next) => {
//   if (req.session.user) return next();
//   else res.sendStatus(401);
// });

// used for products

// endpoint to display specific inventory lists
app.get("/api/inventory", ic.getInventory);
app.get("/api/inventory/donuts", ic.getDonutInventory);
app.get("/api/inventory/drinks", ic.getDrinkInventory);
app.get("/api/inventory/sandwiches", ic.getSandwichInventory);
// NOT INSERTED INTO inventory table yet
// app.get("/api/inventory/cards", pc.getCardInventory);
//
// endpoint to display cart
app.get("/api/cart", cc.getEntireCart);

// endpoints that add functionality to cart/Buy components
app.post("/api/button_add_to_cart", cc.buttonAddToCart);
app.post("/api/button_subtract_from_cart", cc.buttonSubstractFromCart);
app.post("/api/input_add_to_cart", cc.inputAddToCart);
app.delete("/api/delete_from_cart/:cart_id/", cc.deleteFromCart);

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

app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});
