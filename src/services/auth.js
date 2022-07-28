import { getEnvVariables  } from '../helpers/getEnvVariables'

const { VITE_API_URL } = getEnvVariables()
const BaseUrl = `${VITE_API_URL}/auth/`

/**
 * @describe Register with email and password to the API
 * @param {string} name - User name
 * @param {string} email 
 * @param {string} password 
 * @returns {object} user object
 */
export const RegisterApi = async (name ,email, password) => {
  const resp = await  fetch(`${VITE_API_URL}auth/create`,{
    method: 'POST',
    body: JSON.stringify({name, email, password}),
    headers:{
      'Content-Type': 'application/json'
    } 
})
const  data = await resp.json()
return data
}

/**
 * @describe Login with email and password to the API
 * @param {string} email 
 * @param {string} password 
 * @returns user object
 */
export const loginApi = async (email, password) => {
const resp = await  fetch(`${VITE_API_URL}auth/login`,{
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers:{
          'Content-Type': 'application/json'
        } 
   })
const  data = await resp.json()
return data
}
 
/**
 * @describe validate actual token, and renew the token of the user if it is expired, 
 * @param {string} token 
 * @returns {object} user data
 */
export const renewTokenApi = async (token) => { 
  const resp = await  fetch(`${VITE_API_URL}auth/renewtoken`,{
    method: 'Get',
    headers:{
      'Content-Type': 'application/json',
      "x-token": token,
    } 
})
const  data = await resp.json()
return data
}
      