
import { render as rtlRender } from "@testing-library/react"
import { Provider } from "react-redux"
import  { MemoryRouter } from "react-router-dom"

import { Dashboard } from "../../src/players/pages/dashboard"
import { store } from "../../src/store/store"

const render = component => 
    rtlRender(
        <Provider store={store}>
            <MemoryRouter>
                {component}
            </MemoryRouter>
      </Provider>
    )


describe('test att players dashboard', () => { 
    test('should be show the dashboard equals', () => {
        const { container } = render(<Dashboard  />)
        expect(container).toMatchSnapshot()
    })   
})