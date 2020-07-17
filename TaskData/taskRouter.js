const express = require('express')
const task = require('./taskModel')

const router = express.Router()

router.get('/', (req,res)=>{
    
    task.getTasks()
    .then(tasks =>{
        res.json(tasks)
    })

.catch(error =>{
    res.status(500).json({message:'error'})

   
})
})


router.post('/', (req, res)=>{
   task.addTasks(req.body)
   .then(tasks =>{
       res.status(201).json(req.body)
   })
   .catch(error =>{
       console.log(error)
       res.status(500).json({message:'error adding task'})
   })
        })
module.exports =router