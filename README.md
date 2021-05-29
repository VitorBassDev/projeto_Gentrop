
## 💻 Sobre o Projeto

Projeto construído para avaliação no processo seletivo da [Gentrop] para Desenvolvedor Jr.

O teste consiste no desenvolvimento de um projeto `[backend]` e `[frontend]`, com o objetivo de consumir a api do [GitHub](github.com/) para retorar os repositórios de um usuário. 

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes Tecnologias e Ferramentas:

- [JavaScrip](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript). Linguagem de Programação.
- [NodeJs](https://nodejs.org/en/). Plataform de Desenvolemento (Desenvolvimento do Backend).
- [ReactJs](https://pt-br.reactjs.org/). Biblioteca de Desenvolvimento Web (Desenvolvimento do Frontend).
- [Npm](https://www.npmjs.com/). Gerenciador de Pacotes.
- [Bootstrap](https://getbootstrap.com/) Responsividade e Estilização.
- [Axios](https://www.npmjs.com/package/axios) Biblioteca utilizada para consumir APIS.
- [VsCode](https://code.visualstudio.com/) Editor de código.
- [Linux](https://www.linux.org/) Sistema Operacional.


## 🚀 Como executar o Projeto
### O primeiro passo é realizar o Fork ou Download do Projeto neste repositório

## 🚀 Backend

1. Navege até a pasta `backend`: (`cd backend/`)
2. Instale as dependências do projeto no terminal (`npm install || yarn install`).
3. Execute o projeto no termianl (`npm run dev`).
4. Neste passo, o servidor será iniciado

**Mais Sobre o Backend:**
Aplicação desenvolvida utilizando a tecnologia `NodeJs`.
- Utiliza o `nodemon` para capturar alterações e atualizar o servidor instantaneamente.
- Utiliza o `dotenv` para configurações de variáveis de ambiente que estão setadas no arquivo `.env` localizado na raiz do projeto, contendo o valor da porta a ser utilizada no para rodar o servidor do backend e o valor da url da `API do GitGub`.
- Utliza a biblioteca `cors` para configuração de acesso de requsições e tipos de métodos do HTTP as quais estas requisições terão acesso.
- Utiliza a biblioteca `axios` para a configuração da comunicação com API do GitHub.
- Utilizar o `Swagger` para configuração de documentação de rotas da aplicação, qual poderá ser acessada assim que o servidor estiver ativo através o endereço: `http://localhost:8080/doc/`: 

## 🚀 Frontend 

1. Faça um Fork ou Download do Projeto.
2. Navege até a pasta `frontend`: (`cd frontend/`)
3. Instale as dependências do projeto no terminal (`npm install || yarn install`).
4. Execute o projeto no terminal (`npm start`).
5. O Projeto será aberto no navegador.

**Mais Sobre o Frontend:**
Aplicação desenvolvida utilizando a bilbioteca `React` em conjunto com o `framework bootstrap`.
- Utiliza a biblioteca do bootstrap para estilização e responsividade, 
- Utiliza a biblioteca `axios` para a configuração da comunicação com o backend através da configuração dor arquivo `connectionGitHub.js` localizado em `src/services`.
- Utliza o `UseState` e o `useEffect`, ambos `Hooks` do React:


## 🚧 Features
- [x] A Principal Feature no modo geral, é a busca por repositórios do GitHub de um usuário pré definido na rota do Backend, através da cominicação do frontend com o backend, onde este último, por sua vez, realiza a comunicação com a API do GitHub.

## 🚧 Melhorias que poderiam serem implementadas
-  Link para envio de email (Implementação no FronEnd).(Implementação no FronEnd)
-  Formulário para buscar um repositório (Implementação no FronEnd).
-  Mostrar botões para avançar para a próxima página de resultados dos repositórios.
-  Configuração Efetiva da documentação da API do Backend.

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---
By Vítor Guedes 👋🏻 [Linkedin](https://www.linkedin.com/in/vitor-guedes/).
