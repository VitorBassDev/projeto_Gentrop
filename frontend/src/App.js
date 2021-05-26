// import React from 'react';

function App() {
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
          <div className="col-md-5 ">
            <form className="form-inline mt-2 mt-md-0">      
              <input class="form-control mr-sm-2" type="text" placeholder="Nome do usuário"/>
              <a className="btn btn-md btn-primary mt-3" href="../../components/navbar/" role="button">Buscar »</a>  
            </form>
          </div>
        </div>
          
      </div>
    </main>

    <div className="container">

      <div className="row">
        <div className="col-md-3">
          <h2>Título</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>      
        </div>
        
        <div className="col-md-3">
          <h2>Título</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>

        </div>
        
        <div className="col-md-3">
          <h2>Título</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        </div>

        <div className="col-md-3">
          <h2>Título</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        </div>
        <hr/>
      </div>
    </div>
      
  </div>
  </>
  );
}

export default App;







