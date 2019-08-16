exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "apple pie" },
        { name: "blueberry pie" },
        { name: "pumpkin pie" }
      ]);
    });
};
