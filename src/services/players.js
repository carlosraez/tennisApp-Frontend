import { getEnvVariables  } from '../helpers/getEnvVariables'

const { VITE_API_URL } = getEnvVariables()
const BaseUrl = `${VITE_API_URL}/player/`

/**
 * @describe Register with email and password to the API
 * @param {string} name - User name
 * @param {string} email 
 * @param {string} password 
 * @returns {object} user object
 */
export const savePlayerApi = async ({name, tennisShot, location, birthday, level}, token) => {
  const resp = await  fetch(`${VITE_API_URL}players/create`,{
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

