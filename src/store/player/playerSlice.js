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
      const  players  = actions.payload;
      players.forEach(player => { 
        const exists = state.players.some(p => p.name === player.name);
        if (!exists) {
          state.players.push(player);
        }
      });
    },
    onDeletePlayer: (state ,actions) => { 
      const player = actions.payload;
      const index = state.players.findIndex(p => p.name === player.name);
      state.players.splice(index, 1);
    }
  },
});

// Action creators are generated for each case reducer function
export const { onSavePlayer, onGetPlayers, onDeletePlayer} = playerSlice.actions;

export default playerSlice.reducer;