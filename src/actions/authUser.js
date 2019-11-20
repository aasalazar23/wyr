export const SET_AUTH_USER = "SET_AUTH_USER";
export const LOG_OUT_AUTH_USER = "LOG_OUT_AUTH_USER";

export function setAuthUser(id) {
  return {
    type: SET_AUTH_USER,
    id
  };
}

export function logOutAuthUser() {
  return {
    type: LOG_OUT_AUTH_USER
  }
}
