import './App.css';
import Person from './Person';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Person personName = "Yuval" place = "LA"/>
      <Person personName = "Elad" place = "gaza"/>
    </div>
  );
}

export default App;

