import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './Game';
import Footer from './Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar fixed-top navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href=""><strong>Jogo da Velha</strong></a>
          <img src='/img/logo.png' />
        </div>
      </nav>
      <div className="card bg-dark mb-3">
        <div className='card-body'>
          <Game />
        </div>
      </div>
      <Footer />
    </div>);
}

export default App;




