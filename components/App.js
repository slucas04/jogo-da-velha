import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './Game';

function App() {
  return (
    <>
      <nav className="navbar navbar-dark">
        <a className="navbar-brand"> 
          <img src="/img/logo.png" className="d-inline-block align-top"/>
          <strong>Jogo da Velha</strong>
        </a>
      </nav>
      <div className="card bg-dark mb-3">
        <div className='card-body'>
          <Game />
        </div>
      </div>
    </>);
}

export default App;




