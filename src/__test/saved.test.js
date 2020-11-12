import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import Saved from '../saved';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore();

const props = {};

// describe('My Saved Component', () => {
//     it('should render correctly with default props and redux store', () => {
//         const wrapper = shallow(
//             <Provider store={store}>
//                 <Saved {...props} />
//             </Provider>
//         );
//         expect(wrapper).toMatchSnapshot();
//     });
// });
describe('Saved', () => {
    test('renders Saved component', () => {
        <Provider store={store}>
      render(<Saved />);
      expect(screen.getByText(/No Data Available/)).toBeInTheDocument();
      expect(screen.getByText(/Delete/)).toBeInTheDocument();
      </Provider>
    });
  });
  test('calls onClick prop when Delete clicked', () => {
    const handleClick = jest.fn();
    <Provider store={store}>
    render(<Saved onClick={handleClick}>Delete</Saved>)
    fireEvent.click(screen.getByText(/Delete/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
    </Provider>
  })

  test('It should not allow letters to be inputted', () => {
    let utils;
    let input 
    <Provider store={store}>
     utils = render(<Saved />)
     input = utils.getByLabelText('pin-input')       
     expect(input.value).toBe('') // empty before
     fireEvent.change(input, {{ target: { value: 'Good Day' } }})
    expect(input.value).toBe('') //empty after
     </Provider>
    
  })
  