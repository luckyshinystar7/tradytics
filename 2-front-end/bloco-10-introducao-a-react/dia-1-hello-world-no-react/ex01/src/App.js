import './App.css';

const ToDoList = ['lavar o gato', 'alimentar o gato', 'limpar o banheiro do gato', 'comprar comida para o gato', 'dar atenção ao gato'];
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      {ToDoList.map((value) => Task(value))}
    </div>
  );
}

export default App;
