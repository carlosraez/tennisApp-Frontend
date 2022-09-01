import { fireEvent, screen , render as rtlRender } from "@testing-library/react"
import  { MemoryRouter } from "react-router-dom"
import { Provider } from "react-redux"

import { store } from "../../src/store/store"
import { InputsForm} from "../../src/components/inputsForm"
import { en } from '../../src/i18n/';

const render = component => 
    rtlRender(
        <Provider store={store}>
            <MemoryRouter>
                {component}
            </MemoryRouter>
      </Provider>
)

describe('should be change value off inputs', () => { 
    const inputsFormPlayer = [
        {
          label: en.inputLabelUserName,
          type: 'text',
          placeholder: en.playerName,
          ariaLabel: 'userName',
          name: 'name',
          value: '',
          errorMessage: en.errorInputName,
          pattern: '^[A-z]{3,16}/*$',
          required: true,
        },
        {
          label: en.bestTennisShot,
          ariaLabel: 'userTennisShot',
          name: 'tennisShot',
          value: '',
          options: [ en.driveShot, en.serveShot, en.reverse,],
          errorMessage: en.errorTennisShotInput,
          isSelect: true,
          required: true,
        },
        {
          label: en.locationPlayer,
          type: 'text',
          placeholder: en.inputPlaceHolderLocation,
          ariaLabel: 'locationPlayer',
          name: 'location',
          value: '',
          errorMessage: en.errorLocationInput,
          pattern: '^[A-z]{3,16}/*$',
          required: true,
        },
        {
          label: en.birthday,
          type: 'date',
          ariaLabel: 'BirthDayPlayer',
          name: 'birthday',
          value: '',
          errorMessage: en.errorBirthDayInput,
          pattern: '/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/',
          required: true,
        },
        {
          label: en.selectLevel,
          isSelect: true,
          ariaLabel: 'level',
          name: 'level',
          value: '',
          errorMessage: en.errorSelectInput,
          options:  [ en.begginer,en.intermediate ,en.advanced, en.tournament ],
          required: true,
        }
      ]
     test('should be inputs at form Players', () => { 
        render(<InputsForm inputsForm={inputsFormPlayer} focused={{}} />)
        
        const inputBirthDayPlayer = screen.getByLabelText('BirthDayPlayer')
        expect(inputBirthDayPlayer).toBeTruthy()
        
        const inputPlayerName = screen.getByLabelText('userName')
        expect(inputPlayerName).toBeTruthy()
        
        const inputPlayerLevel = screen.getByLabelText('level')
        expect(inputPlayerLevel).toBeTruthy()
        
        const inputLocationPlayer = screen.getByLabelText('locationPlayer')
        expect(inputLocationPlayer).toBeTruthy()
       
        const inputPlayerTennisShoot = screen.getByLabelText('userTennisShot')
        expect(inputPlayerTennisShoot).toBeTruthy()
     
      })

 })