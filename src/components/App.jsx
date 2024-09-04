import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: ""
  });  

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName(prevValue => {
      if (name === "fName") {
       return {
        fname: value,
        lname: prevValue.lname
       };
       } else if (name === "lName") {
          return {
          fname: prevValue.fname,
          lname: value
        };       
      }
    });
 }
  
  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lname}</h1>
      <form>
        <input        
        name="fName"
        onChange={handleChange}
        placeholder="First Name"
        value={fullName.fname}
        />
        <input        
        name="lName"
        onChange={handleChange}
        placeholder="Last Name"
        value={fullName.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
