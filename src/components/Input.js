import React, { useState } from "react";

function Input(props) {
  const [username, setUsername] = useState("");

  const handleChange = e => {
    setUsername(e.target.value);
  };

  const handleSubmit = e => {
    props.getSteamID(username);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          placeholder="Enter your steam username"
          value={props.value}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Input;
