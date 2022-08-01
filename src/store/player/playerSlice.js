import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  players: [],
  playerActive: { },
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    onSavePlayer: (state ,actions) => {
      state.players.push(actions.payload);
      state.playerActive = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSavePlayer, } = playerSlice.actions;

export default playerSlice.reducer;