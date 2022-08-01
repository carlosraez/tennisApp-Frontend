import { onSavePlayer } from './playerSlice';

export const addPlayer = (playerTennis) => {
    return  (dispatch, getState) => {
          
            const { player } = getState();
            const { players } = player;
    
            const newPlayer = {
                ...playerTennis,
                id:players.length + 1,
            };
            dispatch(onSavePlayer(newPlayer));
    }
}