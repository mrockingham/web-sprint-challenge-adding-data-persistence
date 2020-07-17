const db =require('../data/connection')

module.exports ={
    get,
    getById,
    addProject
}


function get(){
    return db('project')
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