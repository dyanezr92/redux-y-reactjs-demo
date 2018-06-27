import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Col from '../../components/Col';

describe('<Col w="10"/>', () => {
  describe('render()', () => {
    test('renders the col', () => {
      const wrapper = shallow(<Col w={10}/>);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});

describe('<Col w="10" style="background: red;"/>', () => {
  describe('render()', () => {
    test('renders the col', () => {
      // const wrapper = shallow(<Col w="10" style="background: red;"/>);
      // const component = wrapper.dive();
      //
      // expect(toJson(component)).toMatchSnapshot();
    });
  });
});
