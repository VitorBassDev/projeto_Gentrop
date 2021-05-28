require('dotenv/config')
const apiGitHub = require('../service/apiExterna')
module.exports ={
  
  async usersGit (request, response) {

  try{
    const {data} = await apiGitHub.get(`VitorBassDev/repos`)
    if(data){
      return response.send(data)
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
  },

  async usersRepositoryGeneralGit (request, response) {
    const {name} = request.body

    const page = 1
    const per_page = 4
    try {
      
      // const {data} = await apiGitHub.get(`${name}/repos?page=${page}&per_page=${per_page}`)
      const {data} = await apiGitHub.get(`${name}/repos`)
      console.log(data)
        if(data){

          return response.json({
            error: false,
            message: "Repositórios do Usuário Selecionado",
            dados: data
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