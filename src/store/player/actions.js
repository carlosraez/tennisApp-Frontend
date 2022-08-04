import { useDispatch } from "react-redux"
import { onFilterPlayers } from './playerSlice.js'


export const filterPlayers = (filter) => {
     const dispatch = useDispatch();
     dispatch(onFilterPlayers(filter));
}