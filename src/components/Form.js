import React, { useState } from "react";


function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [errors, setErrors] = useState([]);


  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    if(firstName.length > 0){
      props.onComplete({ firstName: firstName, lastName: lastName });
      setFirstName('')
      setLastName('')
      setErrors([]);

      } else{
        setErrors(["First Name required...!"])


    }
  }

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    // {errors.length > 0 ? errors.map((error, index) => (
    //   <p key={index} style={{color : "red"}}>{error}</p>
    // )) : null}

  );
}

export default Form;
