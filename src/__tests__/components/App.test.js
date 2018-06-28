import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

import App from '../../components/App';

describe('<App/>', () => {
  describe('render()', () => {
    test('renders the App', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
