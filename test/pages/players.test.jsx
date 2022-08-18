
import { render as rtlRender } from "@testing-library/react"
import { Provider } from "react-redux"
 
import { Dashboard } from "../../src/players/pages/dashboard"
import { store } from "../../src/store/store"

const render = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
)

describe('test att players dashboard', () => { 
    test('should be show the dashboard', () => {
        const component = render(
            <Dashboard />
        )
        expect(getByText('Players')).toBeInTheDocument()
    })   
})