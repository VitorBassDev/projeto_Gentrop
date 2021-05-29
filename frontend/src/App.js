import React, {useEffect, useState} from 'react';
//import axios from 'axios'
import connectionApi from '../src/services/connectionGitHub'

function App() {

  const [ projects, setProjects ] = useState([])

   useEffect(() => {
    loadProjects()
  }, [])    

  async function loadProjects(){
    try{
      const response = await connectionApi.get(`usersGit`)
      setProjects(response.data)
      console.log(response.data)
    } catch(err){
      alert('Não foi possível Localizar os projetos!')
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
    
      { projects.length > 0 &&
        <div>
        {projects.map(project => (
      
        <div className="mx-auto col-md-6">
          <div className="card flex-md-row mb-4 box-shadow h-md-250 text-white bg-dark">
            <div className="card-body d-flex flex-column align-center">
              <strong className="d-inline-block mb-2 text-danger">Respositório</strong>
              <h3 className="mb-0">
                {project.name}
              </h3>
              <div className="mt-2 mb-1 text-muted">{project.language}</div>
              <p className="card-text mb-auto">{project.description}</p>
              <a href={project.html_url} className="link-info"> {project.html_url}</a>
            </div>
          </div>
        </div>
        ))}
        </div>
      }
    </main>
  </div>
  </>
  );
}

export default App;