const express = require('express')
const project = require('./projectModel')
const router = express.Router()

router.get('/', (req, res)=>{
    project.get()
    .then(projects =>{
        res.json(projects)
    })
    .catch(err=>{
        res.status(500).json({message: 'failed to retrieve projects'})
    })
})

module.exports = router