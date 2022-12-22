import './App.css';
import { usersData } from './json';
import { useState } from 'react';

function App() {

  const [addName, setName] = useState('')
  const [NamesList,setNameList] = useState([])

  function handleToDoChange(e){
    setName(e.target.value)
  }

  function addingName(){
    setNameList([...NamesList,addName])
    console.log(NamesList)
  }


  return (
    <div className="App">
      <h3>all names and emails:</h3>
      <input value = {addName} onChange = {handleToDoChange}></input> 
      <button onClick={addingName}>add to list</button>
      <table>
            <tr>
              <th>name</th>
              <th>email</th>
            </tr>
        {usersData.map((data,key) => {
        return ( 
              <tr key = {key}>
                <td>{data.name}</td>
                <td>{data.email}</td>
              
                </tr>
                )
            })}

          </table>
          <h3>adding names</h3>
          <ul>
            {NamesList.map(
              addTheName => (
                <li>{addTheName} </li>
              )
            )

            }
          </ul>

    </div>
  );
};

export default App;
