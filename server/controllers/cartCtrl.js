module.exports = {
  getEntireCart: async (req, res) => {
    const db = req.app.get("db");
    db.get_entire_cart().then(entireCart => {
      res.status(200).send(entireCart);
    });
  },
  // similar to add_user_treasure
  // app.put
  inputAddToCart: async (req, res) => {
    const { quantity, product_id } = req.body;
    const { user_id } = req.session.user;
    const enitreCart = await req.app
      .put("db")
      .input_add_to_cart([product_id, user_id, quantity]);
    return res.status(200).send(enitreCart);
  },
  // app.post
  buttonAddToCart: async (req, res) => {
    const { quantity, product_id } = req.body;
    const { user_id } = req.session.user;
    const enitreCart = await req.app
      .post("db")
      .button_add_to_cart([product_id, user_id, quantity]);
    return res.status(200).send(enitreCart);
  },
  buttonSubstractFromCart: async (req, res) => {
    const { quantity, product_id } = req.body;
    const { user_id } = req.session.user;
    const enitreCart = await req.app
      .post("db")
      .button_subtract_from_cart([product_id, user_id, quantity]);
    return res.status(200).send(enitreCart);
  }
};
