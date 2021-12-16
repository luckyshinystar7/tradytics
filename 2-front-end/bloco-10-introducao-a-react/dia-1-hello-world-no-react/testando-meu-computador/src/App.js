import logo from './logo.svg';
import './App.css';

function App() {

  // function helloWorld (nome, sobrenome) {
  //   return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
  // }

  // const element = helloWorld("Jorge", "Maravilha");
  // const container = <div>{element}</div>;

  const nome = 'Jorge Maravilha';
  const classe = 'hello-class';
  const element = <h1 className={classe}>Hello, {nome}</h1>;
  const textJSX = <h1>Hello, JSX</h1>; // exercicio de fixacao FIX01

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {element};
        {textJSX};
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
