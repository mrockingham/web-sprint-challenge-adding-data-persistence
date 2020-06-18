const express = require('express')
const resources = require('./resources-model')


const router = express.Router()


router.get('/', (req,res) =>{
    resources.getResources()
    .then(resources =>{
        res.json(resources)
    })
    .catch(err =>{
        res.status(500).json({message: 'Failed to retrive resources'})
    })
})

router.post('/', (req, res) =>{
    resources.addResources(req.body)
    .then(resources=>{
        res.status(201).json(req.body)
    })
    .catch(error=>{
        console.log(error)
        res.status(500).json({message:'error adding resources'})
    })
})

module.exports = router