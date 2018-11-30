import React, { Suspense, useState } from "react";
import { connect } from "react-redux";
import { login } from "./actions";
import "./App.css";
import Login from "./components/Login.js";
import api from "./api.js";
const Dashboard = React.lazy(() => import("./components/Dashboard.js"));

function App(props) {
  const [isUpdated, setIsUpdated] = useState(false);

  // Fetch and set user and games
  const getUserData = async steamID => {
    const [userDetails, games] = await Promise.all([
      api.getUserDetails(steamID),
      api.getUserGames(steamID)
    ]).catch(error => {
      console.log("hello");
    });
    props.login(
      userDetails.data.response.players[0],
      games.data.response.games
    );
  };

  // Get SteamID
  const getSteamID = username => {
    api
      .getSteamID(username)
      .then(({ data }) => {
        getUserData(data.response.steamid);
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (!isUpdated && props.loggedin && props.user) {
    console.log("hello");
    getUserData(props.user.steamid);
    setIsUpdated(true);
  }

  return (
    <div className="App">
      {props.loggedin ? (
        <Suspense fallback={<div>lodaing...</div>}>
          <Dashboard />
        </Suspense>
      ) : (
        <Login getSteamID={getSteamID} />
      )}
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    loggedin: state.loggedin,
    user: state.user,
    games: state.games
  };
};

const mapDispatchToProps = { login };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
