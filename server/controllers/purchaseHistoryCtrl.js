module.exports = {
  getPurchaseHistory: async (req, res) => {
    const purchaseHistory = await req.app
      .get("db")
      .get_user_purchase_history([req.session.user.user_id]);
    return res.status(200).send(purchaseHistory);
  }
};
