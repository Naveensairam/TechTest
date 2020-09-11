import React from 'react';
import { shallow } from 'enzyme';
import Generate from '../generate';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore();

const props = {};

describe('My Generate Component', () => {
    it('should render correctly with default props and redux store', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Generate {...props} />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
it('should dispatch both', () => {
    const dispatch = jest.fn();
    // store.dispatch = dispatch;
    dispatch();
    const wrapper = shallow(
        <Provider store={store}>
            <Generate {...props} error={true} />
        </Provider>);
        
   
    expect(dispatch).toHaveBeenCalledTimes(1);
    });