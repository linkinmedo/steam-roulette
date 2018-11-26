import React from "react";
import "./Login.css";
import Input from "./Input.js";

function Login(props) {
  console.log(props);
  return (
    <div className="Login">
      <Input getSteamID={props.getSteamID} />
    </div>
  );
}

export default Login;
