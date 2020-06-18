const db =require('../data/connection')

module.exports ={
    getTasks,
    getTasksById,
    addTasks
}



function getTasks(){
    return db('tasks')
    .join('projects',)
    .select(
        'tasks.id',
        'tasks.name as task_name',
        'tasks.discription',
        'tasks.completed',
        'projects.id',
        'projects.name as project_name',
        'projects.discription as project_discription'
        // 'projects.description'
        
    )
}

function getTasksById(id){
    return db('tasks')
    .where({id})
}

function addTasks(tasks) {
    return db('tasks')
    .insert(tasks)
    .then(([id]) => getTasksById)
}