// import { combineReducers } from "redux";
import { LOGIN, LOGOUT } from "../actions";

const initialState = {
  loggedin: false,
  uesr: {},
  games: []
};

function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        loggedin: true,
        user: action.user,
        games: action.games
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

// const todoApp = combineReducers({
//   user,
//   todos
// });

export default user;
