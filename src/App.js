import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Ruan"
  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
     <h1>Olá, Mundo!</h1>
     <p>Meu primeiro app</p>
     <h2>Alterando o JSX</h2>
     <p>Olá, {name}</p>
     <p>Soma: 2 + 2 = {2+2}</p>
     <img src={url} alt="Minha imagem 150x150" />
     
    </div>
  );
}

export default App;
