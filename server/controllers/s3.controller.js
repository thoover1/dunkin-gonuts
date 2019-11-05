// for getting menu image from AWS s3 - doesn't work
let menu = require("/api/menu");

module.exports = {
  read: (req, res) => {
    res.status(200).send(menu);
  }
};
