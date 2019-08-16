const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getRecipeById(id) {
  return db("recipes").where({ id });
}

function getShoppingList(id) {
  return db("recipes-ingredients").where({ id });
}

function getInstructions(id) {
  return db("recipes-instructions").where({ id });
}
