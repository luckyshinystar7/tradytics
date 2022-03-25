import logo from './logo.svg';
// import { connect } from 'react-redux';
import './App.css';
import InputsList from './pages/InputsList';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
        <InputsList />
        <List />        
      </header>
    </div>
  );
}

// export default connect(mapStateToProps,null)(App)

export default App;
