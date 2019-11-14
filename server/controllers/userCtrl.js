const bcrypt = require("bcrypt");

module.exports = {
<<<<<<< HEAD
  register: async (req, res) => {
    const { username, email, password, phone_number } = req.body;
    const db = req.app.get("db");
    const foundUser = await db
      .find_user_by_email(email)
      .catch(err => console.log(err));
=======
  register: async (req, res, next) => {
    const { username, email, password } = req.body;
    const db = req.app.get("db");
    const foundUser = await db.find_user_by_email(email);
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
    if (foundUser.length) {
      res.status(400).send("user already exists");
    } else {
      const saltRounds = 12;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
<<<<<<< HEAD
      const [newUser] = await db
        .create_user([username, email, hashedPassword, phone_number])
        .catch(err => console.log(err));
=======
      const [newUser] = await db.create_user([username, email, hashedPassword]);
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
      //   req.session.user = newUser[0]
      req.session.user = newUser;
      res.status(200).send(req.session.user);
    }
  },
<<<<<<< HEAD
  login: (req, res) => {
=======
  login: (req, res, next) => {
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
    const { email, password } = req.body;
    const db = req.app.get("db");
    db.find_user_by_email(email).then(([foundUser]) => {
      if (!foundUser) {
<<<<<<< HEAD
        res.status(400).send(alert("No user info found."));
=======
        res.status(400).send("No user info found.");
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
      } else {
        bcrypt.compare(password, foundUser.password).then(isAuthenticated => {
          if (isAuthenticated) {
            req.session.user = {
              user_id: foundUser.user_id,
              username: foundUser.username,
              email: foundUser.email
            };
            res.status(200).send(req.session.user);
          } else {
            res.status(400).send("You need to register an account first.");
          }
        });
      }
    });
  },
<<<<<<< HEAD
  logout: (req, res) => {
    req.session.destroy();
    res.status(200).send("We hope you went Gonuts for Donuts!!!");
  },
  userSession: (req, res) => {
=======
  logout: (req, res, next) => {
    req.session.destroy();
    res.status(200).send("We hope you went Gonuts for Donuts!!!");
  },
  userSession: (req, res, next) => {
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
    res.status(200).send(req.session.user);
  }
};
