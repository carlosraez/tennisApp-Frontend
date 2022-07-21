import { checkingCredentials } from './authSlice';

export const checkingAuthentication = ({ email, pasword }) => {
  return async dispatch => {
    dispatch(checkingCredentials());
    console.log(email, pasword);
  };
};
