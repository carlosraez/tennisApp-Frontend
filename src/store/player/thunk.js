import { savePlayerApi, getPlayersApi } from '../../services/players';
import { onSavePlayer, onGetPlayers } from './playerSlice';

export const addPlayer = (tennisPlayer) => {
    return  (dispatch) => {
        const token = localStorage.getItem('token');
        if (!token) {
         localStorage.clear();
         return dispatch(onLogout());
        }
         try {
            const newPlayer = {...tennisPlayer};
            savePlayerApi(newPlayer, token)
            dispatch(onSavePlayer(newPlayer));
         } catch (error) {
            console.log(error); 
        }    
    }
}

export const getPlayers = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        if (!token) {
         localStorage.clear();
         return dispatch(onLogout());
        }
         try {
            const players = await getPlayersApi(token);
            dispatch(onGetPlayers(players));
         } catch (error) {
            console.log(error); 
        }    
    }
}