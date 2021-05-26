require('dotenv/config')

const express   = require('express')
const cors      = require('cors')
const routes    = require('./router')

// CONFIGURAÇÃO PARA UTILIZAÇÃO DO EXPRESS
const app = express()

// CONFIGURAÇÃO DE TIPO DE FORMATO DE DADOS
app.use(express.json())

// HABILITAR REQUISIÇÕES EXTERNAS
app.use(cors())

// // HABILITAR UTILIZAÇÃO DO ARQUIVO DE ROTAS
app.use(routes)

//
app.use( (req, res , next) => {
  // CONFIGURAR URL QUE TERÁ PERMISÃO DE ACESSO - O * INFORMA QUE QUALQUER SISTEMA PODERÁ REALIZAR A CONEXÃO COM ESSA APIS
  res.header("Access-Control-Allow-Origin", "*");
  // CONFIGURAR QUAIS MÉTODOS POSSÚEM PERMISSÃO DE ACESSO
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
});


// ROTA INICIAL DA APLICAÇÃO
app.get('/', (request, response) => {
  return response.status(200).json({
    message: "PROJETO - Avaliação prática para vaga de desenvolvedor Jr na Gentrop"
  })
})

app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Backend run is`, process.env.BACKEND_PORT)
})