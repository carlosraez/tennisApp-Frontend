import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoadingPlayers: true,
  players: [],
  playerActive: { },
  errorMessage: '',
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    checkingPlayers: (state, actions) => {
      state.isLoadingPlayers = true;
      state.errorMessage =  actions.payload;
    },
    onSavePlayer: (state ,actions) => {
      state.isLoadingPlayers = false;
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
      state.isLoadingPlayers = false;
      const player = actions.payload;
      const index = state.players.findIndex(p => p.name === player.name);
      state.players.splice(index, 1);
    },
    onUpdatePlayer: (state ,actions) => { 
      state.isLoadingPlayers = false;
      const player = actions.payload;
      const index = state.players.findIndex(p => p.name === player.name);
      state.players[index] = player;
    }
  },
});

// Action creators are generated for each case reducer function
export const { onSavePlayer, onGetPlayers, onDeletePlayer, onUpdatePlayer, checkingPlayers} = playerSlice.actions;

export default playerSlice.reducer;