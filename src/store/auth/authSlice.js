import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checking: true,
  authenticaded: 'not-Authenticaded',
  user: {
    name: '',
    email: '',
    uid: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checking: state => {
      state.checking = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { checking } = authSlice.actions;

export default authSlice.reducer;
