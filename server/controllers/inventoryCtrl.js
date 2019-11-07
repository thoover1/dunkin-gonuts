// similar to treasureController from week6/day4
// Should I do a 'getAllDonuts:, etc.' controller for each category? similar to getAllInventory:?
module.exports = {
  // similar to get_all_treasure -- DON'T NEED!!! SEE server.js file for .get endpoint that accesses database
  getInventory: async (req, res) => {
    const inventory = await req.app.get("db").get_all_inventory();
    return res.status(200).send(inventory);
  },
  getDonutInventory: async (req, res) => {
    const DonutInventory = await req.app.get("db").get_donut_inventory();
    return res.status(200).send(DonutInventory);
  },
  getDrinkInventory: async (req, res) => {
    const DrinkInventory = await req.app.get("db").get_drink_inventory();
    return res.status(200).send(DrinkInventory);
  },
  getSandwichInventory: async (req, res) => {
    const SandwichInventory = await req.app.get("db").get_sandwich_inventory();
    return res.status(200).send(SandwichInventory);
  },
  getCardInventory: async (req, res) => {
    const CardInventory = await req.app.get("db").get_card_inventory();
    return res.status(200).send(CardInventory);
  }
};
