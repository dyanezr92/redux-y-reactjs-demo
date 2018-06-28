import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

import InfoMessage from '../../components/InfoMessage';

describe('<InfoMessage text="Alert text!"/>', () => {
  describe('render()', () => {
    test('renders the info message', () => {
      const wrapper = shallow(<InfoMessage text="Alert text!"/>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
