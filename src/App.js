import logo from './logo.svg';
import './App.css';
import Condicional from './components/Condicional';

function App() {
  const name = "Ruan"
  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <Condicional/>  
    </div>
  );
}

export default App;
