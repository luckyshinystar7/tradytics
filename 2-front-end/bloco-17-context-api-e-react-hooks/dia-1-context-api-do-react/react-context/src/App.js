import logo from './logo.svg';
import './App.css';
import GreatGrandfather from './components/Context01';
import Context02 from './components/Context02ContextType';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          < GreatGrandfather />
          <Context02 />
        </p>
      </header>
    </div>
  );
}

export default App;
