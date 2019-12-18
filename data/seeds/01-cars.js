
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 12345678, 'make': 'Volvo',
          model: 'Volvo850', mileage: 11000.23, 'transmission': 'automatic',
        'title': 'clean' },
      ]);
    });
};
