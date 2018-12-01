/*
 * action types
 */

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const COMPLETE_GAME = "COMPLETE_GAME";
export const UNCOMPLETE_GAME = "UNCOMPLETE_GAME";

/*
 * action creators
 */

export function login(user, games) {
  return { type: LOGIN, user, games };
}

export function logout() {
  return { type: LOGOUT };
}

export function completeGame(game) {
  return { type: COMPLETE_GAME, game };
}

export function uncompleteGame(game) {
  return { type: UNCOMPLETE_GAME, game };
}
