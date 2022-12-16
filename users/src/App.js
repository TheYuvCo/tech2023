import './App.css';
import { usersData } from './json';

function App() {


  return (
    <div className="App">
      <h3>all names and emails:</h3>
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
    </div>
  );
};

export default App;
