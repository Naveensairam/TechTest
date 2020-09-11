import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore();

const props = {};

describe('My App Component', () => {
    it('should render correctly with default props and redux store', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <App {...props} />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
