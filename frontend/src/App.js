import React, {useEffect, useState} from 'react';
import axios from 'axios'

function App() {

  // Hooks Utilizados

  // -- useEffect
  // -- useState

    // VARIÁVEL PARA ARMAZENAR O VALOR DO INPUT DO FORM
    // const [user, setUpdateUser] = useState()

    const [projetcUser, updateProject] = useState({})
    const [error, updateError] = useState()
    
  useEffect(() => {

    try {
      axios
      //.get(`https://api.github.com/repos/VitorBassDev/angularJoaoPimentel`)
      .get(`https://api.github.com/users/VitorBassDev/repos?page=3&per_page=4`,{
    }).then(response =>{
        updateProject(response.data);
        console.log(response.data)
      })
    } catch (error) {
      updateError(error.message)
      console.log('Erro ao buscar repo')
    }
    
  },[])

  if(error){
    return<h1> Deu erro: {error} </h1>
  }

  return (
  <>
  <div classNameName="container">
    <nav className="navbar navbar-dark bg-dark mb-4 text-center">
      <a className="navbar-brand" href="google">Consumir API do GitHub</a>
    </nav>

    <main role="main" className="container">
      <div className="jumbotron text-center">
        <h1>Consumindo a API do GitHub</h1>
        <p className="lead"> 
          Por padrão, está página busca automáticamente os repositórios do usuário VittorBassDev,
          para pesquisar outro usuário preenha este campo e clique em buscar.
        </p>

        <div className="row p-2 justify-content-center mb-2 ">
          <div className="col-md-5 " onSubmit="">
            <form className="form-inline mt-2 mt-md-0">      
              <input 
                class="form-control mr-sm-2" 
                type="text"
                value={projetcUser}
                placeholder="Nome do usuário"
                // onChange={onChangeInput}
                // onChange={ e => setUpdateUser(e.target.value)}
                />
              <button 
                className="btn btn-md btn-primary mt-3" 
                type="submit" 
                >
                  Buscar »
              </button>  
            </form>
          </div>
        </div>
          
      </div>
    </main>

    <div className="container">

      <div className="row">
        <div className="col-md-6">
          {/* <h2>Nome do Projeto: {projetc.data.svn_url}</h2> */}
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>      
        </div>

      </div>
    </div>
      
  </div>
  </>
  );
}

export default App;







