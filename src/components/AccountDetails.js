import React from "react";
import { connect } from "react-redux";

function AccountDetails(props) {
  return (
    <div className="AccountDetails">
      <p>Real Name: {props.user.realname}</p>
      <p>
        Persona Name:{" "}
        <a href={props.user.profileurl}>{props.user.personaname}</a>
      </p>
      <p>
        SteamID: <a href={props.user.profileurl}>{props.user.steamid}</a>
      </p>
      <p># of Games: {props.games.length}</p>
    </div>
  );
}

// export default Dashboard;
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    user: state.user,
    games: state.games
  };
};

export default connect(
  mapStateToProps,
  null
)(AccountDetails);
