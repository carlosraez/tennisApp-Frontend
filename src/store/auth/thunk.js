import { loginApi, RegisterApi } from '../../services/auth';
import { checkingCredentials, onLogout, onLogin } from './authSlice';

export const checkingRegisterAuthentication = ({name, email, password }) => {
  return async dispatch => {
    dispatch(checkingCredentials());
    try {
      const resp = await RegisterApi(name, email, password);
      if (resp.ok === false) {
        console.log(resp.errors);
        dispatch(checkingCredentials(resp.message));
      }
      localStorage.setItem('token', resp.token);
      localStorage.setItem('token-init-time', new Date().getTime());
      dispatch(onLogin({
        user: {
          email: resp.email,
          name: resp.user,
          password: resp.password,
          token: resp.token,
        }, 
      }));
      
    } catch (error) {
      console.log(error);
    }
  };
};

export const checkingLoginAuthentication = ({ email, password }) => {
  return async dispatch => {
    dispatch(checkingCredentials());
    try {
      const resp = await loginApi(email, password);
      if (resp.ok === false) {
        dispatch(checkingCredentials(resp.message));
      }
      localStorage.setItem('token', resp.token);
      localStorage.setItem('token-init-time', new Date().getTime());
      dispatch(onLogin({
        user: {
          email: resp.email,
          name: resp.user,
          uid: resp.user.uid,
          token: resp.token,
        }, 
      }));
      
    } catch (error) {
      console.log(error);
    }
  };
};

export const checkingGoogleAuthentication = ({ email, password }) => {

}