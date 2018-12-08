import React, { useState } from "react";
import { connect } from "react-redux";
import { sample } from "lodash";
import { completeGame } from "../actions";
import fallbackImage from "../assets/steam-games.png";

function Roulette(props) {
  const [isInitial, setIsInitial] = useState(true);
  const [rolling, setRolling] = useState(false);
  const [game, setGame] = useState({});

  const roll = () => {
    setIsInitial(false);
    setRolling(true);
    let x = 10;
    const interval = setInterval(() => {
      setGame(sample(props.games.uncompletedGames));
      if (x === 0) {
        clearInterval(interval);
        setRolling(false);
      }
      x--;
    }, 100);
  };

  const handleComplete = () => {
    props.completeGame(game);
    roll();
  };

  return (
    <div className="Roulette">
      {isInitial ? (
        <p>need a game to play?</p>
      ) : (
        <>
          <img
            src={
              game.img_logo_url
                ? `http://media.steampowered.com/steamcommunity/public/images/apps/${
                    game.appid
                  }/${game.img_logo_url}.jpg`
                : fallbackImage
            }
            alt={game.name}
          />
          <p>{game.name}</p>
        </>
      )}
      {!rolling && (
        <div className="Row">
          <button onClick={roll}>{isInitial ? "Roll" : "Re-Roll"}</button>
          {game.name && <button onClick={handleComplete}>Complete</button>}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    user: state.user,
    games: state.games
  };
};

const mapDispatchToProps = { completeGame };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Roulette);
