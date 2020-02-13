exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Rol")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Rol").insert([
        { nombre: "administrador" },
        { nombre: "estudiante" }
      ]);
    });
};
