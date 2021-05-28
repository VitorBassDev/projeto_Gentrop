const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/router.js']

swaggerAutogen(outputFile, endpointsFiles).then(() =>{
  require('./src/router.js')
})