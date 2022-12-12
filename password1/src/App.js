import './App.css';
import { useState, useEffect } from 'react';
import Password from './password1';


function App() {

  const [delta,setDelta] = useState(1)
  const [passVal,setPass] = useState('weak')
  const [passVibe, setPassVibe] = useState(true)


 
  function ChangeNumber(event){
    console.log(event);
    setDelta(Number(event.target.value))
  }

useEffect (() => {
if (delta > 100){
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
      <input type = "number" value={delta} onChange = {ChangeNumber}/>
      <button disabled={passVibe} >submit</button>
      <p></p>
        your password is {passVal}
      <Password  delta = {delta} setPassowrd = {setPassowrd} ></Password>
    </div>
  );
}

export default App;
