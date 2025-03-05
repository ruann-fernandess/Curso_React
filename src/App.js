import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'
import List from './components/List'

function App() {
  const name = "Ruan"
  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <Frase/>
      <Frase/>
      <SayMyName nome="Rafaella" />
      <SayMyName nome="Alanzoka" />
      <SayMyName nome={name} />
      <Pessoa nome="Ruan" idade="20" profissao="programador" foto=""/>
      <List/>
    </div>
  );
}

export default App;
