const express = require('express')
const routes  = express.Router()

/**
 * IMPORTAÇÃO DAS ROTAS
 */
 const controllerGit = require('./controllers/gitHub')
 
/**
 * ROTAS DA APLICAÇÃO 
 */

 routes.get('/usersGit', controllerGit.usersGit)
 routes.get('/usersRepositoryGeneral', controllerGit.usersRepositoryGeneralGit)
 
module.exports = routes