import { savePlayerApi } from '../../services/players';
import { onSavePlayer } from './playerSlice';

export const addPlayer = (tennisPlayer) => {
    return  (dispatch, getState) => {
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