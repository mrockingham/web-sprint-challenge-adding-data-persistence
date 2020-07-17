
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {id: 1, name: 'Dolly', description: 'Dolly to move objects' },
        {id: 2, name: 'Screwdriver', description: 'Tool' },
        {id: 3, name: 'Drill', description: 'Tool' },
        {id: 4, name: 'Water', description: 'Berverage' }
      ]);
    });
};
