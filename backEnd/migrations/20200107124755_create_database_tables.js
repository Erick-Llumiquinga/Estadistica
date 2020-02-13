exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("Rol", function(table) {
      table.increments("id");
      table.string("nombre").unique();
    })

    .createTable("Persona", function(table) {
      table.increments("id");
      table.string("identificacion").unique();
      table.string("telefono");
      table.string("nombre"),
      table.string("correo"),
      table.string("clave"),
      table.integer("idRol")
           .references("id")
           .inTable("Rol")
    })

    .createTable("Materia", function(table) {
      table.increments("id");
      table.string("nombre")
    })

    .createTable("Semestre", function(table) {
      table.increments("id");
      table.integer("idMateria")
           .references("id")
           .inTable("Materia");
    })

    .createTable("Malla", function(table) {
      table.increments("id");
      table.string("nombre")
    })

    .createTable("SemestreMalla", function(table){
      table.increments("id"),
      table.integer("idMalla")
           .references("id")
           .inTable("Malla");
      table.integer("idSemestre")
           .references("id")
           .inTable("Semestre");
    })

    .createTable("Carrera", function(table) {
      table.increments("id");
      table.string("nombre")
    })

    .createTable("Matricula", function(table){
      table.increments("id"),
      table.string("nombre")
      table.integer("idPersona")
           .references("id")
           .inTable("Persona");
      table.integer("idCarrera")
           .references("id")
           .inTable("Carrera");
      table.integer("idSemestreMalla")
           .references("id")
           .inTable("SemestreMalla");
    })

    .createTable("Asistencia", function(table){
      table.increments("id"),
      table.integer("porcentaje")
    })

    .createTable("Parcial", function(table) {
      table.increments("id"),
      table.string("nombre"),
      table.integer("idMatricula")
           .references("id")
           .inTable("Matricula")
      table.integer("idAsistencia")
           .references("id")
           .inTable("Asistencia")
    })

    .createTable("Nota", function(table) {
      table.increments("id"),
      table.integer("vinculacion"),
      table.integer("trabajoPractico"),
      table.integer("evaluacion"),
      table.integer("examen"),
      table.integer("idParcial")
           .references("id")
           .inTable("Parcial")
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("Rol")
    .dropTableIfExists("Persona")
    .dropTableIfExists("Materia")
    .dropTableIfExists("Semestre")
    .dropTableIfExists("Malla")
    .dropTableIfExists("SemestreMalla")
    .dropTableIfExists("Carrera")
    .dropTableIfExists("Matricula")
    .dropTableIfExists("Asistencia")
    .dropTableIfExists("Parcial")
    .dropTableIfExists("Nota");
};
