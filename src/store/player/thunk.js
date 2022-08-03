import { savePlayerApi, getPlayersApi, deletePlayerApi, updatePlayerApi} from '../../services/players';
import { onSavePlayer, onGetPlayers, onDeletePlayer, onUpdatePlayer, checkingPlayers } from './playerSlice';

export const addPlayer = (tennisPlayer) => {
    return async (dispatch) => {
        dispatch(checkingPlayers());
        const token = localStorage.getItem('token');
        if (!token) {
         localStorage.clear();
         return dispatch(onLogout());
        }
         try {
            const newPlayer = {...tennisPlayer};
            const resp = await savePlayerApi(newPlayer, token)
            if (!resp.ok) {
             return dispatch(checkingPlayers(resp.message));
            }
            dispatch(onSavePlayer(newPlayer));    
            
         } catch (error) {
            console.log(error); 
        }    
    }
}

export const getPlayers = () => {
    return async (dispatch) => {
        dispatch(checkingPlayers());
        const token = localStorage.getItem('token');
        if (!token) {
         localStorage.clear();
         return dispatch(onLogout());
        }
         try {
            const players = await getPlayersApi(token);
            if (!players.ok) { return dispatch(checkingPlayers(players.message)) }
            const tennisPlayers = players.players
            dispatch(onGetPlayers(tennisPlayers));
         } catch (error) {
            console.log(error); 
        }    
    }
}

export const deletePlayerList = (tennisPlayer) => { 
    return async (dispatch) => {
        dispatch(checkingPlayers());
        const token = localStorage.getItem('token');
        if (!token) {
         localStorage.clear();
         return dispatch(onLogout());
        }
         try {
            const playerToDelete = tennisPlayer._id;
            const resp = await deletePlayerApi(playerToDelete, token)
            if (!resp.ok) { return dispatch(checkingPlayers(resp.message)) }
            dispatch(onDeletePlayer(tennisPlayer));
         } catch (error) {
            console.log(error); 
        }    
    }
}

export const updatePlayer = (tennisPlayer, id) => { 
    return async (dispatch) => {
        dispatch(checkingPlayers());
        const token = localStorage.getItem('token');
        if (!token) {
         localStorage.clear();
         return dispatch(onLogout());
        }
         try {
            const playerId = id;
            const playerToUpdate = tennisPlayer;
            const resp = await updatePlayerApi(playerToUpdate,playerId, token)
            if (!resp.ok) { return dispatch(checkingPlayers(resp.message))}
            console.log('me ejecuto');
            dispatch(onUpdatePlayer(playerToUpdate));
         } catch (error) {
            console.log(error); 
        }    
    }
}