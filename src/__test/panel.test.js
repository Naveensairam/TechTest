import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import Panel from '../panel';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

const mockStore = configureStore();
const store = mockStore();

const props = {};

// describe('My Panel Component', () => {
//     it('should render correctly with default props and redux store', () => {
//         const wrapper = shallow(
//             <Provider store={store}>
//                 <Panel {...props} />
//                 expect(screen.getByText(/Search/)).toBeInTheDocument();
//             </Provider>
//         );
//         expect(wrapper).toMatchSnapshot();
//     });
// });
describe('Panel', () => {
    test('renders Panel component', () => {
        <Provider store={store}>
      render(<Panel />);
      expect(screen.getByText(/Generate/)).toBeInTheDocument();
      expect(screen.getByText(/Saved/)).toBeInTheDocument();
      </Provider>
    });
  });
