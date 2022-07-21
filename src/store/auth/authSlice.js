import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'not-authenticaded',
  user: {
    name: null,
    email: null,
    uid: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, actions) => {},
    logout: (state, payload) => {},
    checkingCredentials: state => {
      state.status = 'checking';
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer;
