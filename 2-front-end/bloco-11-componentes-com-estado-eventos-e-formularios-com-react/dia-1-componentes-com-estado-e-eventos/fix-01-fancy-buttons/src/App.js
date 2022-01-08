import './App.css';

function handleClick() {
  console.log("Oi")
}

function App() {
  return (
    <>
      <button onClick={handleClick} >Oi</button>
      <button onClick={() => console.log("Olá")} >Ola</button>
      <button onClick={() => console.log("Tchau")} >Tchau</button>
    </>
  );
}

export default App;
