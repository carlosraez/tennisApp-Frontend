export const initialState = {
    status: 'not-authenticated',
    user: { },
    errorMessage: null,
}

export const authenticatedState = {
    status: 'authenticated',
    user: {
        id: 1,
        name: 'John Doe',
        email: 'carlos@gmail.com',
        password: '123456',
    },
    errorMessage: null,
}

export const notAuthenticatedState = { 
    status: 'not-authenticated',
    user: { },
    errorMessage: null,
}