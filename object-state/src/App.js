import './App.css';
import { useState } from 'react';

function App() {

  const [toDo, setToDo] = useState('')

  function handleToDoChange(e){
    setToDo(e.target.value)
  }

  return (
    <div className="App">
      <input value = {toDo} onChange = {handleToDoChange}/>
      <button>add to list</button>
    </div>
  );
}

export default App;
