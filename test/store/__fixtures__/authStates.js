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

export const demoUser = {
    name: 'Carlos Raez',
    email: 'carlosraez@gmail.com',
    password: '123456',
    token: '3r44r5'
}