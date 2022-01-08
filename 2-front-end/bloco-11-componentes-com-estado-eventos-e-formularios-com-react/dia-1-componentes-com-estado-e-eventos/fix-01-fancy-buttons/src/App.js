import './App.css';

function handleClick() {
  console.log('Qualquer texto quando clicar no botão!')
}

function App() {
  return (
    <button onClick={handleClick} >Oi</button>
  );
}

export default App;
