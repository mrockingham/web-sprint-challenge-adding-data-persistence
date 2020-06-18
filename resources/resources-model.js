const db = require('../data/connection')

module.exports ={
getResources,
addResources

}
function getResources(){

    return db ('resources')
}

function getResourceByID(id){
    return db('resources')
    .where({id})
}


function addResources(resource){
    return db('resources')
    .insert(resource)
    .then(([id])=> getResourceByID(id))
}