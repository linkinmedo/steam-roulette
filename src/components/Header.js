import React from "react";
import "./Header.css";
import UserCard from "./UserCard.js";

function Header(props) {
  return (
    <header>
      <p>Steam Roulette</p>
      <UserCard
        avatar={props.avatar}
        personaName={props.personaName}
        switchAccount={props.switchAccount}
      />
    </header>
  );
}

export default Header;
