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


router.get('/:id/task', (req, res) => {
    const { id } = req.params;
  
    project.getProjectTasks(id)
    .then(task => {
      if (task.length) {
        res.json(task);
      } else {
        res.status(404).json({ message: 'Could not find task for project' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get task' });
    });
  });


router.post('/',(req,res)=>{
    project.addProject(req.body)
    .then(project =>{
        res.status(201).json(req.body)
    }).catch(error => {
        res.status(500).json({message: error})
    })
})

module.exports = router