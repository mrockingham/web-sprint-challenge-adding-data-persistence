const express = require('express');
const cors = require('cors')
const helmet =require('helmet')
const morgan = require('morgan')
const chalk = require('chalk')
const projectRoute = require('./projectData/projectRoute')
const resourceRouter = require('./resourceData/resourceRoute')
const taskRouter = require('./TaskData/taskRouter')

const server = express();
server.use(helmet());
server.use(express.json());

server.use(morgan('dev'))

server.use('/api/projects', projectRoute)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)


const port = process.env.PORT || 4000;


server.listen(port, () => {
  console.log(chalk.blue`\n*** Server Running on http://localhost:${port} ***\n`);
});