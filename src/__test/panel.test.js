import React from 'react';
import { shallow } from 'enzyme';
import Panel from '../panel';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

const mockStore = configureStore();
const store = mockStore();

const props = {};

describe('My Panel Component', () => {
    it('should render correctly with default props and redux store', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Panel {...props} />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
