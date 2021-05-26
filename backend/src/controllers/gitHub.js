require('dotenv/config')
const apiGitHub = require('../service/apiExterna')
module.exports ={
  
  async usersGit (request, response) {
    const {name} = request.body

    try {
      
      const {data} = await apiGitHub.get(`${name}`)
        
        if(data){
          return response.status(200).json({
            error: false,
            message: "Usuário Pesquisado",
            data: data
          })
          }else {
            return response.status(500).json({
              error: true,
              message: "Repositório não encontrado"
            })
          }
      } catch (error) {
        return response.status(404).json({
          message: "Erro ao consumir a API",
          error: error.message
        })
      }
  },

  async usersRepositoryGeneralGit (request, response) {
    const {name} = request.body

    try {
      
      const {data} = await apiGitHub.get(`${name}/repos`)
        
        if(data){

          return response.status(200).json({
            error: false,
            message: "Repositórios do Usuário Selecionado",
            data
          })
          }else {
            return response.json({
              error: true,
              message: "Repositório não encontrado",
            })
          }
      } catch (error) {
        return response.json({
          message: "Erro ao consumir a API",
          error: error.message
        })
      }
  }
}