
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {id: 1, name: 'change rooms', description:'need to move items to larger room'},
        {id: 2, name: 'build desks', description:'need to build desk than came in'},
        {id: 3, name: 'build chairs', description:'need to build chairs for desk'}
      ]);
      
    });
};
