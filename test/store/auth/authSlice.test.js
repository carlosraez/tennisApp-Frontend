import { authSlice, onLogin, onLogout } from '../../../src/store/auth/authSlice';
import { authenticatedState, initialState, notAuthenticatedState } from '../__fixtures__/authStates';
import { testUserCredentials } from '../__fixtures__/testUserCredentials';

describe('testing at auth Slice', () => { 
    test('should return initial state', () => { 
        expect(authSlice.getInitialState()).toEqual(initialState);
    })
    test('should be make correct login', () => { 
        const state = authSlice.reducer(initialState, onLogin(testUserCredentials ));
        expect(state).toEqual({
            status: 'authenticated',
            user: testUserCredentials,
            errorMessage: null,
        });
    })
    test('should be logout', () => { 
        const state = authSlice.reducer(authenticatedState, onLogout())
        expect(state).toEqual(initialState);
     })

    test('should be checking credentials', () => {
        const messegeError = 'Invalid credentials';
        const state = authSlice.reducer(notAuthenticatedState, authSlice.actions.checkingCredentials(messegeError))
        expect(state).toEqual({
            status: 'checking',
            user: {},
            errorMessage: messegeError,
        });
     })
 })