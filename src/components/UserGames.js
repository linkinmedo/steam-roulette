import React from "react";
import { connect } from "react-redux";
import GamesList from "./GamesList.js";

function UserGames(props) {
  return (
    <div className="UserGames">
      <h2>Your Games</h2>
      <GamesList />
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
)(UserGames);
