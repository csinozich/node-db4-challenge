exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
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
