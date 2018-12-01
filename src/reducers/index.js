// import { combineReducers } from "redux";
import { LOGIN, LOGOUT, COMPLETE_GAME, UNCOMPLETE_GAME } from "../actions";
import sortBy from "lodash/sortBy";

const initialState = {
  loggedin: false,
  uesr: {},
  games: {
    uncompletedGames: [],
    completedGames: []
  }
};

function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      const completedIDs = state.games.completedGames
        ? state.games.completedGames.map(game => game.appid)
        : [];
      const uncompletedGames = sortBy(
        action.games.filter(game => !completedIDs.includes(game.appid)),
        ["name"]
      );
      return {
        loggedin: true,
        user: action.user,
        games: {
          uncompletedGames,
          completedGames: state.games.completedGames
        }
      };
    case LOGOUT:
      return initialState;
    case COMPLETE_GAME:
      return {
        ...state,
        games: {
          uncompletedGames: state.games.uncompletedGames.filter(
            game => game.appid !== action.game.appid
          ),
          completedGames: sortBy(
            [...state.games.completedGames, action.game],
            ["name"]
          )
        }
      };
    case UNCOMPLETE_GAME:
      return {
        ...state,
        games: {
          uncompletedGames: sortBy(
            [...state.games.uncompletedGames, action.game],
            ["name"]
          ),
          completedGames: state.games.completedGames.filter(
            game => game.appid !== action.game.appid
          )
        }
      };
    default:
      return state;
  }
}

// const steamRoulette = combineReducers({
//   user,
//   games
// });

export default user;
