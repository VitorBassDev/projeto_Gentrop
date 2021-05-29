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
      const response = await connectionApi.get(`userIndex`)
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
          <div className="alert alert-primary" role="alert">
          Por padrão, está página busca automáticamente os repositórios do GitHub do usuário 
            <a href="https://github.com/VitorBassDev" className="alert-link">VittorBassDev !</a>
            <p>
              A busca é realizado pelos 4 primeiros repositórios.
            </p>
          </div>  
        </p>

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