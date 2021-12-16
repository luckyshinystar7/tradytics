import logo from './logo.svg';
import './App.css';

function App() {
  
  

  function helloWorld (nome, sobrenome) {
    return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
  }
  
  const element = helloWorld("Jorge", "Maravilha");
  const container = <div>{element}</div>;

return (

  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <h1>Hello, {container}</h1>
      <p>
        Edit <code>src/App.js</code> and save to reload
      </p>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);
}

export default App;
