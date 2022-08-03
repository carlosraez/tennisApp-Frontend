import { getEnvVariables  } from '../helpers/getEnvVariables'

const { VITE_API_URL } = getEnvVariables()
const BaseUrl = `${VITE_API_URL}players/`

/**
 * @describe Save Player to API
 * @param {object}  - Tennis Player 
 * @param {string}  - Token
 * @returns {object} data object
 */
export const savePlayerApi = async ({name, tennisShot, location, birthday, level}, token) => {
  const resp = await  fetch(`${BaseUrl}create`,{
    method: 'POST',
    body: JSON.stringify({
      name,
      tennisShot,
      location,
      birthday,
      level,
    }),
    headers:{
      'Content-Type': 'application/json',
      "x-token": token,
    } 
})
const  data = await resp.json()
return data
}

/**
 * @describe Get all players from the API
 * @param {string} token - token
 * @returns {object} user object
 */
export const getPlayersApi = async (token) => {
  const resp = await  fetch(`${BaseUrl}getPlayers`,{
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      "x-token": token,
    } 
})
const  data = await resp.json()
return data
}

/**
 * @describe Delete a player from the API
 * @param {string} token - token
 * @param {id} string - id of player 
 * @returns {object} user object
 */
export const deletePlayerApi = async (id, token) => { 
  const resp = await  fetch(`${BaseUrl}deletePlayer`,{
    method: 'DELETE',
    body: JSON.stringify({id}),
    headers:{
      'Content-Type': 'application/json',
      "x-token": token,
    }
})
const  data = await resp.json()
return data
}

/**
 * @describe Update Player
 * @param {string} token - token
 * @param {player} object - a player will be update 
 * @returns {object} user object
 */
export const updatePlayerApi = async ({ tennisShot, location, birthday, level}, id, token) => { 
  const resp = await  fetch(`${BaseUrl}updatePlayer`,{
    method: 'PUT',
    body: JSON.stringify({ tennisShot, location, birthday, level, id}),
    headers:{
      'Content-Type': 'application/json',
      "x-token": token,
    }
})
const  data = await resp.json()
return data
}