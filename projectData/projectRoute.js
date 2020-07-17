const express = require('express')
const project = require('./projectModel')
const router = express.Router()

router.get('/', (req, res)=>{
    project.get()
    .then(projects =>{
        res.json(projects)
    })
    .catch(err=>{
        res.status(500).json({message: err})
    })
})

router.post('/',(req,res)=>{
    project.addProject(req.body)
    .then(project =>{
        res.status(201).json(req.body)
    }).catch(error => {
        res.status(500).json({message: error})
    })
})

module.exports = router