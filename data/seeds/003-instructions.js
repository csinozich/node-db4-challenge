exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        { instruction: "chop" },
        { instruction: "mix" },
        { instruction: "bake" }
      ]);
    });
};
