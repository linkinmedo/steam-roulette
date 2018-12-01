import React from "react";
import { connect } from "react-redux";
import "./Dashboard.css";
import Header from "./Header.js";
import UserGames from "./UserGames.js";

function Dashboard(props) {
  return (
    <div className="Dashboard">
      <Header avatar={props.user.avatar} personaName={props.user.personaname} />
      <div className="Content">
        <div className="Roulette">hello</div>
        <UserGames />
      </div>
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
)(Dashboard);
