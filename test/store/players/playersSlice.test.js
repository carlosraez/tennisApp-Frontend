import { playerSlice, 
    onSavePlayer, 
    onGetPlayers, 
    onDeletePlayer, 
    onUpdatePlayer,  
    searchPlayers,
    checkingPlayers } from '../../../src/store/player/playerSlice';
import { playerStates, playerNew, listPlayersActual, players } from '../__fixtures__/playerStates';

describe('testing at players Slice', () => { 
    test('should return initial State', () => {
        expect(playerSlice.getInitialState()).toEqual(playerStates);
    
     })

    test('should be add player', () => { 
        const state = playerSlice.reducer(listPlayersActual, onSavePlayer(playerNew))
        expect(state.players).toEqual([...players,playerNew]);
    })

    test('should be delete a player', () => { 
        const state = playerSlice.reducer(listPlayersActual, onDeletePlayer(playerNew))
        expect( state.players ).not.toContain( players[1] )
    })

    test('should be get players', () => { 
        const state = playerSlice.reducer(listPlayersActual, onGetPlayers(players))
        expect( state.isLoadingPlayers ).toBeFalsy();
        expect( state.players ).toEqual( players );

        const newState = playerSlice.reducer( state, onGetPlayers( players ) );
        expect( state.players.length ).toBe( newState.players.length );
     
    })
    test('should be update a player', () => { 
        const state = playerSlice.reducer(listPlayersActual, onUpdatePlayer(playerNew))
        expect( state.players ).toContain( playerNew );
    })

    test('should be search a player', () => { 
        const querySearch = 'jose';
        const state = playerSlice.reducer(listPlayersActual, searchPlayers(querySearch))
        expect( state.players ).toEqual( players.filter( player => player.name.toLowerCase().includes(querySearch.toLowerCase()) ) );
    })

    test('should be return checking state', () => { 
        const errorMessage = 'Error';
        const state = playerSlice.reducer(listPlayersActual, checkingPlayers(errorMessage))
        expect( state.errorMessage ).toBe(errorMessage);
        expect( state.isLoadingPlayers ).toBeTruthy();
    })
 })