import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components
import { Provider } from 'react-redux';

import Header from '../../containers/Header';
import finn from '../../static/finn.gif'

// Configurar el mock de la store
const mockStore = configureStore();
const initialState = {
  comments: [],
  complaints: []
};
const store = mockStore(initialState);

// TEST
describe('<Header />', () => {
  test('shows the header with the store data', () => {
    const wrapper = shallow(
        <Header store={ store } title="Awesome Finn" src={ finn } />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
