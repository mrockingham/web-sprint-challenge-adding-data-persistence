const db = require('../data/connection')

module.exports ={
get,
getResourceByID,
add

}
function get(){

    return db ('resource')
}

function getResourceByID(id){
    return db('resource')
    .where({id})
}


function add(resource){
    return db('resource')
    .insert(resource)
    .then(([id])=> getResourceByID(id))
}