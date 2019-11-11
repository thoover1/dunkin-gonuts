require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const ic = require("./controllers/inventoryCtrl");
const uc = require("./controllers/userCtrl");
// require once Ctrl file is completed
const cc = require("./controllers/cartCtrl");
// const phc = require("./controllers/Ctrl");

// const auth = require('./middleware/authMiddleware')
// const aws = require("aws-sdk");
// const config = require("./config/s3.config");

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

// for static server - doesn't work yet
// app.use(express.static(__dirname + "/../build"));

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
app.use((req, res, next) => {
  if (req.session.user) return next();
  else res.sendStatus(401);
});

// used for products
// app.get("/api/purchase_history", pc.getPurchaseHistory);
// app.get("/api/cart", pc.addToCurrentCart);

// endpoint to display specific inventory lists
app.get("/api/inventory", ic.getInventory);
app.get("/api/inventory/donuts", ic.getDonutInventory);
app.put("/api/inventory/donuts", cc.inputAddToCart);
app.post("/api/inventory/donuts/:product_id", cc.buttonEditCart);
app.get("/api/inventory/drinks", ic.getDrinkInventory);
app.get("/api/inventory/sandwiches", ic.getSandwichInventory);
// NOT INSERTED INTO inventory table yet
// app.get("/api/inventory/cards", pc.getCardInventory);
//
// endpoint to display cart
app.get("/api/cart", cc.getEntireCart);
//
// curious if I'll need PUT requests?
// is the PUT what is need to update front end from SQL altering table?
// if creating a user database to store user data, then yes - probably will do this
// examples - firstName, lastName, username, email, profilePicture, previousOrder?, purchaseHistory?

// GET and DELETE requests:
// will show items in respected tabs once clicked on and displayed in the cart
// (or do i need a seperate get request for the cart...
// {i.e. a new link [e.g. '/api/cartItems/xxx']}) ?????????????

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
