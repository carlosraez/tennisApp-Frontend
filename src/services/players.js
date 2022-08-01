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
export const SavePlayerApi = async (playerTennis) => {
  const resp = await  fetch(`${VITE_API_URL}player/create`,{
    method: 'POST',
    body: JSON.stringify({name, email, password}),
    headers:{
      'Content-Type': 'application/json'
    } 
})
const  data = await resp.json()
return data
}

