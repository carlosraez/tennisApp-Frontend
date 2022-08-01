import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/';
import { playerSlice } from './player/';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    player: playerSlice.reducer,
  },
});
