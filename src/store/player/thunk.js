import { savePlayerApi, getPlayersApi, deletePlayerApi } from '../../services/players';
import { onSavePlayer, onGetPlayers, onDeletePlayer, onUpdatePlayer } from './playerSlice';

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
            const tennisPlayers = players.players
            dispatch(onGetPlayers(tennisPlayers));
         } catch (error) {
            console.log(error); 
        }    
    }
}

export const deletePlayerList = (tennisPlayer) => { 
    return (dispatch) => {
        const token = localStorage.getItem('token');
        if (!token) {
         localStorage.clear();
         return dispatch(onLogout());
        }
         try {
            const playerToDelete = tennisPlayer._id;
            deletePlayerApi(playerToDelete, token)
            dispatch(onDeletePlayer(tennisPlayer));
         } catch (error) {
            console.log(error); 
        }    
    }
}

export const updatePlayer = (tennisPlayer) => { 
    return (dispatch) => {
        const token = localStorage.getItem('token');
        if (!token) {
         localStorage.clear();
         return dispatch(onLogout());
        }
         try {
            const playerToUpdate = tennisPlayer;
            //updatePlayerApi(playerToUpdate, token)
            dispatch(onUpdatePlayer(playerToUpdate));
         } catch (error) {
            console.log(error); 
        }    
    }
}