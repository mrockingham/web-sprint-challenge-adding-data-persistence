
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, description: 'start moving items', projects_id: '1'},
        {id: 2, description: 'get tools from tool shed', projects_id: '2'},
        {id: 3, description: 'get refreshments', projects_id: '3'}
      ]);
    });
};
