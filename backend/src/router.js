const express = require('express')
const routes  = express.Router()

/**
 * IMPORTAÇÃO DAS ROTAS
 */
 const controllerGitHub = require('./controllers/gitHub')
 
/**
 * ROTAS DA APLICAÇÃO 
 */

 routes.get('/userIndex', controllerGitHub.userIndex)
  
module.exports = routes