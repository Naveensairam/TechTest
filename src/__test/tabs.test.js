import React from 'react';
import { shallow } from 'enzyme';
import Tabs from '../tabs';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore();

const props = {};

describe('My Tabs Component', () => {
    it('should render correctly with default props and redux store', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Tabs {...props} />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});