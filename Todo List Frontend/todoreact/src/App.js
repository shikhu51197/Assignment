
import './App.css';
import { TodoApp } from './Components/Todo/TodoApp';

function App() {


  const initialItems = [
    { text: 'Edit me (double click)', done: false },
    { text: "I'm done", done: true },
    { text: 'You can filter me', done: true },
  ];

  
  return (
    <div className="App">
      <TodoApp items={initialItems} />,
    </div>
  );
}

export default App;
