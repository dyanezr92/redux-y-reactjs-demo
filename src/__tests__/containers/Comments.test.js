import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components
import { Provider } from 'react-redux';

import Comments from '../../containers/Comments';

// Configurar el mock de la store
const mockStore = configureStore();
const initialState = {
  comments: [],
  complaints: []
};
const store = mockStore(initialState);

// TEST
describe('<Comments />', () => {
  test('shows the comments with the store data', () => {
    const wrapper = shallow(
        <Comments store={ store } />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
