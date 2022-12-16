import './App.css';
import { useState, useEffect } from 'react';
import Password from './password1';


function App() {

  const [delta,setDelta] = useState('')
  const [passVal,setPass] = useState('weak')
  const [passVibe, setPassVibe] = useState(true)


 
  function ChangeNumber(event){
    console.log(event);
    setDelta((event.target.value))
  }

useEffect (() => {
if (delta.length > 2){
  setPassVibe(false)
  console.log(passVibe)
}
else{
  setPassVibe(true)
}
}, [setPassVibe,delta,passVibe]
)
  

  function setPassowrd(pass){
    setPass(pass)
  }



  return (
    <div className="App">
      <h2>Insert your password:</h2>
      <input type="password" value={delta} onChange = {ChangeNumber}/>
      <p></p>
      <button disabled={passVibe} >submit</button>
      <p></p>
        <h3>your password is {passVal}</h3>
      <Password  delta = {delta} setPassowrd = {setPassowrd} ></Password>
    </div>
  );
}

export default App;
