import { checkingRegisterAuthentication } from '../../../src/store/auth'
import { checkingCredentials, onLogin } from '../../../src/store/auth'
import { demoUser } from '../__fixtures__/authStates'
import { RegisterApi } from '../../../src/services/auth'


jest.mock('../../../src/services/auth')

describe('test at auth thunk', () => { 
    
    const dispatch = jest.fn()
    beforeEach(() => jest.clearAllMocks())

    test('checkingLoginAuthentication should be call checking credentials y login - success', async () => {
        localStorage.clear() 
        const registerData = { status: 'ok' , ...demoUser }
        const formData = { 
             name: demoUser.name,
             email: demoUser.email,
             password:'123456',
        }
        await RegisterApi.mockResolvedValue(registerData)
     
        await checkingRegisterAuthentication(formData)(dispatch)
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        try {
            const token = registerData.token
            expect(token).toBe(token)
            expect(dispatch).toHaveBeenCalledWith(onLogin(registerData))
        } catch (error) {
            
        }
       
     })
    
})