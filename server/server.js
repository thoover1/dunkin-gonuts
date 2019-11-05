require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
// const aws = require("aws-sdk");
// const config = require("./config/s3.config");

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

const {
  register,
  login,
  logout,
  userSession
} = require("./controller/userCtrl");

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

app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});
