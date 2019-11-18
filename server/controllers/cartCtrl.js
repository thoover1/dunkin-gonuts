module.exports = {
  getEntireCart: async (req, res) => {
    const { user_id } = req.session.user;
    const db = await req.app.get("db");
    const entireCart = await db.get_entire_cart([user_id]);
    res.status(200).send(entireCart);
  },
  getScrollingCart: async (req, res) => {
    console.log("controller");
    const { user_id } = req.session.user;
    const db = await req.app.get("db");
    const scrollingCart = await db.get_scrolling_cart([user_id]);
    res.status(200).send(scrollingCart);
  },
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
    const db = req.app.get("db");
    const entireCart = await db.button_subtract_from_cart([
      product_id,
      user_id
    ]);
    return res.status(200).send(entireCart);
  },
  inputUpdateCart: async (req, res) => {
    const { cart_id } = req.params;
    const { quantity } = req.body;
    const { user_id } = req.session.user;
    const db = req.app.get("db");
    const entireCart = await db.input_update_cart([quantity, cart_id, user_id]);
    res.status(200).send(entireCart);
  },
  deleteFromCart: async (req, res) => {
    const { cart_id } = req.params;
    const { user_id } = req.session.user;
    const db = req.app.get("db");
    const entireCart = await db.delete_from_cart([cart_id, user_id]);
    res.status(200).send(entireCart);
  },
  afterPurchaseWipeCart: async (req, res) => {
    const { user_id } = req.session.user;
    const db = req.app.get("db");
    const entireCart = await db.afer_purchase_wipe_cart([user_id]);
    return res.status(200).send(entireCart);
  }
};
