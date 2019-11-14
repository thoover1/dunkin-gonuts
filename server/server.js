require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
<<<<<<< HEAD
const ic = require("./controllers/inventoryCtrl");
const uc = require("./controllers/userCtrl");
const cc = require("./controllers/cartCtrl");
// require once Ctrl file is completed
// const phc = require("./controllers/purchaseHistoryCtrl");

// const auth = require('./middleware/authMiddleware')
=======
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
// const aws = require("aws-sdk");
// const config = require("./config/s3.config");

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

<<<<<<< HEAD
const app = express();

// for static server - doesn't work yet
app.use(express.static(`${__dirname} /../build`));

=======
const {
  register,
  login,
  logout,
  userSession
} = require("./controller/userCtrl");

// for static server - doesn't work yet
// app.use(express.static(__dirname + "/../build"));

const app = express();
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
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

<<<<<<< HEAD
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

=======
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
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

<<<<<<< HEAD
// const path = require("path");
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });
=======
// used for authentication and user data management -- NEED TO TEST
app.post("/auth/register", register);
app.post("/auth/login", login);
app.delete("/auth/logout", logout);

// only allows users with profile to use app
app.use((req, res, next) => {
  if (req.session.user) return next();
  else res.sendStatus(401);
});

// curious if I'll need PUT requests?
// is the PUT what is need to update front end from SQL altering table?
// if creating a user database to store user data, then yes - probably will do this
// examples - firstName, lastName, username, email, profilePicture, previousOrder?, purchaseHistory?

// GET and DELETE requests:
// will show items in respected tabs once clicked on and displayed in the cart
// (or do i need a seperate get request for the cart...
// {i.e. a new link [e.g. '/api/cartItems/xxx']}) ?????????????

// POST request:
// will post items into cart once clicked on from respected tabs.
// BUT will a post request also be need to post price into total for payment?
// {i.e. a new link [e.g. '/api/cartItems/']} ?????????????

// endpoints for login/logout/registering
app.post("/auth/register", register);
app.post("/auth/login", login);
app.get("/auth/userSession", userSession);
app.delete("/auth/logout", logout);

// endpoint to display ENTIRE inventory from database "inventory"
app.get("/api/inventory", (req, res, next) => {
  const db = req.app.get("db");
  db.query("SELECT * FROM inventory;").then(inventory => {
    res.status(200).send(inventory);
  });
});
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42

app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});
