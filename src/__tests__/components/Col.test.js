import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

import Col from '../../components/Col';

describe('<Col w="10"/>', () => {
  describe('render()', () => {
    test('renders the col', () => {
      const wrapper = shallow(<Col w={10}/>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});

describe('<Col w="10" style="background: red;"/>', () => {
  describe('render()', () => {
    test('renders the col', () => {
      const wrapper = shallow(<Col w={10} style={{background: "red" }}/>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
