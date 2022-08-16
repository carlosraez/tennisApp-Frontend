export const playerStates = {
    isLoadingPlayers: true,
    players: [],
    playerActive: { },
    errorMessage: '',
    queryPlayer: '',
 }

export const players  = [
    {
        name:'Carlos Raez',
        tennisShot:'Drive',
        location:'Valencia',
        birthday:'01/01/1990',
        level:'beginner',

    },
    {
        name:'Jose Raez',
        tennisShot:'Drive',
        location:'Valencia',
        birthday:'01/01/1992',
        level:'beginner',

    },
]

export const playerNew = { 
    name:'Jose Raez',
    tennisShot:'Drive',
    location:'Valencia',
    birthday:'01/01/1992',
    level:'beginner',
}

export const listPlayersActual = {
    isLoadingPlayers: false,
    players: [...players],
    playerActive: { },
    errorMessage: '',
    queryPlayer: '',
}

