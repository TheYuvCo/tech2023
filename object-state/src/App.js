import './App.css';
import { useState } from 'react';

function App() {

  const [toDo, setToDo] = useState('')
  const [toDoList,settoDoList] = useState(['buy shoes','buy a dog','buy phone'])

  function handleToDoChange(e){
    setToDo(e.target.value)
  }


  return (
    <div className="App">
      <input value = {toDo} onChange = {handleToDoChange}/>
      <button>add to list</button>
      <h3>list of things to do</h3>
      <ul>
        
        {toDoList.map(
          todo => (
            <li>{todo + ' ' + '!!!'}</li>
          ))
        }

      </ul>
    </div>
  );
}

export default App;
