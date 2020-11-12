import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { shallow } from 'enzyme';
import Generate from '../generate';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore();

const props = {};



    describe('Generate', () => {
        test('renders Generate component', () => {
            <Provider store={store}>
          render(<Generate />);
          expect(screen.getByText(/SAVE/)).toBeInTheDocument();
          </Provider>
        });
      });
      test('calls onClick prop when Save clicked', () => {
        const handleClick = jest.fn();
        <Provider store={store}>
        render(<Generate onClick={handleClick}>Save</Generate>)
        fireEvent.click(screen.getByText(/SAVE/i))
        expect(handleClick).toHaveBeenCalledTimes(1)
        </Provider>
      })
      test('calls onClick prop when Generate clicked', () => {
        const handleClick = jest.fn();
        <Provider store={store}>
        render(<Generate onClick={handleClick}>Generate</Generate>)
        fireEvent.click(screen.getByText(/Generate/i))
        expect(handleClick).toHaveBeenCalledTimes(1)
        </Provider>
      })
      test('It should not allow letters to be inputted', () => {
        let utils;
        let input 
        <Provider store={store}>
         utils = render(<Generate />)
         input = utils.getByLabelText('pin-input')       
         expect(input.value).toBe('') // empty before
         fireEvent.change(input, {{ target: { value: 'Good Day' } }})
        expect(input.value).toBe('') //empty after
         </Provider>
        
      })

        