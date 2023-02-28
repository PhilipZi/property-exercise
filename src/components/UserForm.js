import React, { useState } from "react";
import StyledError from "./StyledError";

function UserForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState(false);

  function addName(event) {
    setName(event.target.value);
  }
  function addAge(event) {
    setAge(event.target.value);
  }
  function addLocation(event) {
    setLocation(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    if (name.length === 0 || age.length === 0 || location.length === 0) {
      setError(true);
      return;
    }

    props.onAddData(name, age, location);
    setName("");
    setAge("");
    setLocation("");
  }

  function errorHandler() {
    setError(null);
  }

  return (
    <form onSubmit={submitHandler}>
      {error && (
        <StyledError onClick={errorHandler}>
          <header>
            <h1>no input</h1>
          </header>
        </StyledError>
      )}
      <label>Name</label>
      <input type="text" value={name} onChange={addName}></input>
      <label>Age</label>
      <input type="number" value={age} onChange={addAge}></input>
      <label>Location</label>
      <input type="text" value={location} onChange={addLocation}></input>
      <button type="submit">Add Person</button>
    </form>
  );
}

export default UserForm;
