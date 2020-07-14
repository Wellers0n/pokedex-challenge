export function signInRequest(email, firstName, lastName) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, firstName, lastName },
  };
}
export function signInSuccess(token) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token },
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
