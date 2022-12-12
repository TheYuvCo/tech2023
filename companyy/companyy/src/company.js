function Company(props) {

    const {companyName, NumberOfEmployees, Address} = props

    return (
      <div className="App">
        <h1>WE ARE {companyName}</h1>
        <h2>We have {NumberOfEmployees} employees</h2>
        <h3>We are working at {Address}</h3>
      </div>
    );
  }
  
  export default Company;