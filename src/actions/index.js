/*
 * action types
 */

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

/*
 * action creators
 */

export function login(user, games) {
  return { type: LOGIN, user, games };
}

export function logout() {
  return { type: LOGOUT };
}
