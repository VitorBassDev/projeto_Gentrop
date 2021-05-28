import React, {useEffect, useState} from 'react';
import axios from 'axios'
import connectionApi from '../src/services/connectionGitHub'

function App() {

  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    loadProjects()
  }, [])    

  async function loadProjects(){
    try{
      const response = await connectionApi.get(`usersGit`)
      // const response = await axios.get(`https://api.github.com/users/VitorBassDev/repos`)
      setProjects(response.data)
      console.log(response.data)
    } catch(err){
      alert('It was not possible to find projects!')
    }
  }

  return (
  <>
  <div classNameName="container">
    <nav className="navbar navbar-dark bg-dark mb-4 ">
      <p className=" h1 mx-auto"> 
        <a className="navbar-brand" href="google">Consumir API do GitHub</a>
      </p>
    </nav>

    <main role="main" className="container">
      <div className="jumbotron text-center">
        <h1>Consumindo a API do GitHub</h1>
        <p className="lead"> 
          Por padrão, está página busca automáticamente os repositórios do usuário VittorBassDev !
        </p>
        <p>
          Para pesquisar outro usuário preenha o fomulário abaixo.
        </p>

        <div className="row p-2 justify-content-center mb-2 ">
          <div className="col-md-5 " onSubmit="">
            <form className="form-inline mt-2 mt-md-0">      
              <input 
                class="form-control mr-sm-2" 
                type="text"
                placeholder="Nome do usuário"
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

    { projects.length > 0 &&

    <div className="container">
      {projects.map(project => (

      <div className="row">
        <div className="col-md-6">
          <h2>Nome do Projeto: </h2> 
          <p>{project.name}</p>         
          <p>
            {project.language}
          </p>
          
        </div>

      </div>
      ))}
    </div>
    }
      
  </div>
  </>
  );
}

export default App;