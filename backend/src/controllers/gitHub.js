require('dotenv/config')
const apiGitHub = require('../service/apiExterna')
module.exports ={
  
  async userIndex (request, response) {
    const page = 1
    const per_page = 4

    try{
      const {data} = await apiGitHub.get(`VitorBassDev/repos?page=${page}&per_page=${per_page}`)
      if(data){
        return response.json(data)
        }else {
          return response.json({
            error: true,
            message: "Usuário Ou respositório não encontrado não encontrado",
          })
        }
      } catch (error) {
        return response.json({
          message: "Erro ao consumir a API",
          error: error.message
        })
    }
  },
}