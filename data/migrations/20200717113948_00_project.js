
exports.up = function(knex) {
    return knex.schema.createTable('project', tbl =>{
        tbl.increments('id');
        tbl.string('name').notNullable();
        tbl.string('description')
        tbl.integer('completed').notNullable().defaultTo(0);
    })
    .createTable('resource', tbl =>{
        tbl.increments('id')
        tbl.string('name').unique().notNullable()
        tbl.string('description')
        
    })
    .createTable('task', tbl =>{
        tbl.increments('id');
        tbl.string('description').notNullable()
        tbl.string('notes')
        tbl.integer('completed').notNullable().defaultTo(0)
        //foreign keys
        tbl
        .integer('projects_id')
        .unsigned()
        .references('project.id')
    })
    .createTable('project_resoures', tbl =>{
        tbl.increments()
        //foreign keys
        tbl
        .integer('project_id')
        .unsigned()
        .references('project.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        tbl
        .integer('resources_id')
        .unsigned()
        .references('resources.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        
        
        tbl.string('name', 255).notNullable()
    })
    
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist('project')
  return knex.schema.dropTableIfExist('resource')
  return knex.schema.dropTableIfExist('task')
  return knex.schema.dropTableIfExist('project_resoures')
  
};
