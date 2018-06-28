import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

import TitleCounter from '../../components/TitleCounter';

describe('<TitleCounter numElements={ 5 } elementsName="comments"/>', () => {
  describe('render()', () => {
    test('renders the title counter', () => {
      const wrapper = shallow(<TitleCounter numElements={ 5 } elementsName="comments"/>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
