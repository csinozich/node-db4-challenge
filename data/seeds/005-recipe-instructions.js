exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        { recipe_id: 1, instruction_id: 2 },
        { recipe_id: 1, instruction_id: 3 },
        { recipe_id: 2, instruction_id: 1 },
        { recipe_id: 3, instruction_id: 1 }
      ]);
    });
};
