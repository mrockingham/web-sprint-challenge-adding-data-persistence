const db =require('../data/connection')

module.exports ={
    get,
    getProjectTasks,
    getById,
    addProject
}


function get(){
    return db('project')
}

function getProjectTasks(id){
    return db('project')
    .join('task','task.projects_id', 'project.id')
    .select( 'project.name as project_name','project.description as project_description', 'task.description as Task_Description')
    .where('project.id',id)
       
        
    
}
function getById(id){
    return db('project')
        .where({id})
        .first()
}


function addProject(project){
    return db('project')
    .insert(project)
    .then(project =>{
        return getById(project[0])
    })
}