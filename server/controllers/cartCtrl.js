module.exports = {
  getEntireCart: async (req, res) => {
    const { user_id } = req.session.user;
    const db = req.app.get("db");
    db.get_entire_cart(user_id).then(entireCart => {
      res.status(200).send(entireCart);
    });
  },
  // similar to add_user_treasure
  // app.put
  inputAddToCart: async (req, res) => {
    const { quantity, product_id } = req.body;
    const { user_id } = req.session.user;
    const db = req.app.get("db");
    const entireCart = await db.input_add_to_cart([
      product_id,
      user_id,
      quantity
    ]);
    return res.status(200).send(entireCart);
  },
  // app.post
  buttonAddToCart: async (req, res) => {
    const { product_id } = req.body;
    const { user_id } = req.session.user;
    const db = req.app.get("db");
    const entireCart = await db.button_add_to_cart([product_id, user_id]);
    return res.status(200).send(entireCart);
  },
  buttonSubstractFromCart: async (req, res) => {
    const { product_id } = req.body;
    const { user_id } = req.session.user;
    const db = await req.app.get("db");
    const entireCart = await db.button_subtract_from_cart([
      product_id,
      user_id
    ]);
    return res.status(200).send(entireCart);
  },
  afterPurchaseWipeCart: async (req, res) => {
    const { user_id } = req.session.user;
    const db = await req.app.get("db");
    const entireCart = await db.afer_purchase_wipe_cart([
      product_id,
      user_id,
      quantity
    ]);
    return res.status(200).send(entireCart);
  }
};
