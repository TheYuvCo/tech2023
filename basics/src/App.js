import './App.css';
import Person from './Person';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <input type = "number" value = "8"></input>
      <Person personNName = "Yuval" place = "LA"/>
      <Person personNName = "Elad" place = "gaza"/>
    </div>
  );
}

export default App;

