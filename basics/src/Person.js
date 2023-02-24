function Person(props) {

const {personname, place} = props


    return (
      <div className="App">
        <h1>person component</h1>
        <h2>The name is  {personname} </h2>
        <h3>I live in {place} </h3>
      </div> 
    );
  }
  
  export default Person;