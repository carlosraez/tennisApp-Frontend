import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'not-authenticated',
  user: { },
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin: (state, actions) => {
      state.status = 'authenticated';
      state.user = actions.payload;
      state.errorMessage = null;
    },

    onLogout: (state) => {
      state.status = 'not-authenticated';
      state.user = {};
      state.errorMessage = null;
    },
    checkingCredentials: (state, actions) => {
      state.status = 'checking';
      state.user = {}
      state.errorMessage = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onLogin, onLogout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer;
