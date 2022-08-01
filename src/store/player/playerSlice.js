import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoadingPlayers: true,
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
    onGetPlayers: (state ,actions) => {
      state.isLoadingPlayers = false;
      const { players } = actions.payload;
      players.forEach(player => { 
        const exists = state.players.some(p => p.id === player.id);
        if (!exists) {
          state.players.push(player);
        }
      });
    }
  },
});

// Action creators are generated for each case reducer function
export const { onSavePlayer, onGetPlayers} = playerSlice.actions;

export default playerSlice.reducer;