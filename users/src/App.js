import './App.css';
import { usersData } from './json';
import { useState } from 'react';

function App() {

  const [addName, setName] = useState('')
  const [addEmail,setEmail] = useState('')
  const [NamesList,setNameList] = useState([])
  const [EmailList,setEmailList] = useState([])

  function handleToDoChange(e){
    setName(e.target.value)
  }

  function handleToChangeEmail(e){
    setEmail(e.target.value)
  }

  function addingName(){
    setNameList([...NamesList,addName])
    console.log(NamesList)
  }

  function addingEmail(){
    setEmailList([...EmailList,addEmail])
    console.log(EmailList)
  }



  return (
    <div className="App">
      <body>
      <input value = {addName} onChange = {handleToDoChange}></input>
      <button onClick={addingName}>add name to list</button>
      <p></p>
      <input value = {addEmail} onChange = {handleToChangeEmail}></input> 
      <button onClick={addingEmail}>add email to list</button> 
      <h2>all names and emails from JSON:</h2>
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

          <div class = "row">
          <div class = "column">
          <h3>adding names list:</h3>
          <ul>
            {NamesList.map(
              addTheName => (
                <li>{addTheName} </li>
              )
            )

            }
          </ul>
          </div>

          <div class = "column">
          <h3>adding Emails list:</h3>
            <ul>
              {EmailList.map(
                addEmail => (
                  <li>{addEmail}</li>
                )
              )}
            </ul>
            </div>
            </div>

            </body>
    </div>
  );
};

export default App;
