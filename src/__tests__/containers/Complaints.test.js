import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components
import { Provider } from 'react-redux';

import Complaints from '../../containers/Complaints';

// Configurar el mock de la store
const mockStore = configureStore();
const initialState = {
  comments: [],
  complaints: []
};
const store = mockStore(initialState);

// TEST
describe('<Complaints />', () => {
  test('shows the complaints with the store data', () => {
    const wrapper = shallow(
        <Complaints store={ store } />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
