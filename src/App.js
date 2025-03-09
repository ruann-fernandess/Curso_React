import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento'
import Form from './components/Form'

function App() {
  const name = "Ruan"
  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento />
      <Form/>
    </div>
  );
}

export default App;
