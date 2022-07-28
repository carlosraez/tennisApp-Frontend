import { loginApi, RegisterApi, renewTokenApi } from '../../services/auth';
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
          email: resp.email,
          name: resp.user,
          password: resp.password,
          token: resp.token,
        }, ));
      
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
      return dispatch(checkingCredentials(resp.message));
      }
      localStorage.setItem('token', resp.token);
      localStorage.setItem('token-init-time', new Date().getTime());
      dispatch(onLogin({
          email: resp.email,
          name: resp.user,
          uid: resp.user.uid,
          token: resp.token,
        }, 
      ));
      
    } catch (error) {
      console.log(error);
    }
  };
};

export const checkAuthToken = () => {
  return async dispatch => { 
    const token = localStorage.getItem('token');
    if (!token) {
     return dispatch(onLogout());
    }
    try {
      dispatch(checkingCredentials());
      const resp = await renewTokenApi(token);
      if (resp.ok === false) { 
      return dispatch(onLogout());
      }
      dispatch(onLogin({
       name: resp.name,
       uid: resp.uid,
       token: resp.token,
      }));
      
    } catch (error) {
      localStorage.clear();
    }
  }
}