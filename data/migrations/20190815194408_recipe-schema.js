exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .string("recipe_name", 128)
        .notNullable()
        .unique();
      tbl
        .text("instructions")
        .notNullable()
        .unique();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .string("name", 128)
        .notNullable()
        .unique();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredients.id");
      tbl.primary(["recipe_id", "ingredient_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
