const express = require('express');
const helmet = require('helmet');
const projectRouter =require('./projects/project-router')
const resourcesRouter = require('./resources/resources-router')
const taskRouter = require('./task/task-router')

const server = express()

server.use(helmet())
server.use(express.json())

server.use('/api/projects', projectRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', taskRouter)

module.exports = server