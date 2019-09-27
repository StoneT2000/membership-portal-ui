import { AUTH_USER, UNAUTH_USER, GENERATE_AUTH_TOKEN } from '../actions/types';

const initialState = {
  admin: false,
  authenticated: false,
  token: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    // TODO Authentificated should not always be true.
    case AUTH_USER:
      return {
        ...state,
        admin: true,
        authenticated: true
      };
    case UNAUTH_USER:
      return {
        ...state,
        admin: false,
        authenticated: false
      };
    case GENERATE_AUTH_TOKEN:
      return;
    default:
      return state;
  }
};

export default AuthReducer;
