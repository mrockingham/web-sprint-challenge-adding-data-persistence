const db =require('../data/connection')

module.exports ={
    getTasks,
    getTasksById,
    addTasks
}



function getTasks(){
    return db('task')
    .join('project',)
    .select(
        'task.id',
        'task.description as Task_Description',
        'project.id',
        'project.name as project_name',
        'project.description as project_description '
        // 'projects.description'
        
    )
}

function getTasksById(id){
    return db('tasks')
    .where({id})
}

function addTasks(tasks) {
    return db('task')
    .insert(tasks)
    .then(([id]) => getTasksById)
}