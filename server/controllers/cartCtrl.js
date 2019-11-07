module.exports = {
  // similar to add_user_treasure
  addToCurrentCart: async (req, res) => {
    // not sure if line below is correct.......
    const { id } = req.session.user;
    const currentCart = await req.app
      .get("db")
      // not sure if line below is correct.......
      .add_to_current_cart([req.session.user.id, product_id]);
    return res.status(200).send(currentCart);
  }
};
