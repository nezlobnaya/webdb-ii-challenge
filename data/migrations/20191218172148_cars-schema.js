
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.integer('VIN').unique().notNullable()
      tbl.string('make').notNullable()
      tbl.string('model').notNullable()
      tbl.decimal('mileage').notNullable()
      tbl.string('transmission type')
      tbl.string('title status')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
