import { render, screen } from "@testing-library/react"
import { Provider } from 'react-redux';
import { Spinner } from "../../src/components/spinner";
import { store } from '../../src/store/store';

describe('test att spinner component', () => { 
    test('should be show the text', () => {
    render(
      <Provider store={store}>
        <Spinner />
      </Provider>)
      expect(screen.getByText('Loading...')).toBeTruthy()
    })
})