import { getEnvVariables  } from '../helpers/getEnvVariables'

const { VITE_API_URL } = getEnvVariables()
const BaseUrl = `${VITE_API_URL}/auth/`

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
      