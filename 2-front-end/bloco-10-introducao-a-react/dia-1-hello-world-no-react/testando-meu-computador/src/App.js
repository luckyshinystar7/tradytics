import logo from './logo.svg';
import './App.css';

function App() {
  
  
const nome = 'Jorge Maravilha';
const element = <h1>Hello, {nome}</h1>;

return (

  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <h1>Hello, {element}</h1>
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
