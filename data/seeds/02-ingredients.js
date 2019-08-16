exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "flour", quantity: 2 },
        { name: "water", quantity: 4 },
        { name: "butter", quantity: 1 },
        { name: "apple", quantity: 2 }
      ]);
    });
};
