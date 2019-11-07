module.exports = {
  getPurchaseHistory: async (req, res) => {
    const purchaseHistory = await req.app
      .get("db")
      // is req.session.user.id correct for this?? What else do you add?
      .get_user_purchase_history([req.session.user.id]);
    return res.status(200).send(purchaseHistory);
  }
};
