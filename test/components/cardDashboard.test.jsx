
import { screen , render as rtlRender, fireEvent } from "@testing-library/react"
import  { MemoryRouter } from "react-router-dom"
import { Provider } from "react-redux"

import { store } from "../../src/store/store"
import {  CardDashboard } from "../../src/components/cardDashboard"

const render = component => 
    rtlRender(
        <Provider store={store}>
            <MemoryRouter>
                {component}
            </MemoryRouter>
      </Provider>
)

describe('test att players dashboard', () => {
    const registerImage = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    const title = "register a player"
    const description = "register a player"
    const textLink = "register"
    const linkHref = "/player-register"


    test('render', () => {
         const { getByRole, getAllByText } = render(<CardDashboard 
            registerImage={registerImage} 
            title={title} 
            description={description} 
            textLink={textLink}
            linkHref={linkHref} 
          />,)

        const { src, alt } = getByRole('img')

        expect(getByRole('img')).toBeTruthy()
        expect(src).toBe('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
        expect(alt).toBe('register-image')

        expect(getByRole('heading',{level: 5})).toBeTruthy()
        expect(getByRole('link')).toBeTruthy() 
        expect(getAllByText('register').length).toBe(1)    
    })   

    test('should go to /player-register', () => { 
         render(<CardDashboard 
            registerImage={registerImage} 
            title={title} 
            description={description} 
            textLink={textLink}
            linkHref={linkHref} 
          />,)
        fireEvent.click(screen.getByText('register'))
    })
})