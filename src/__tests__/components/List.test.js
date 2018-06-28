import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

import List from '../../components/List';

describe('<List elements={[]} emptyMessage="Empty!"/>', () => {
  describe('render()', () => {
    test('renders the list', () => {
      const wrapper = shallow(<List elements={[]} emptyMessage="Empty!"/>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});

describe('<List elements={[a: "a", b: "b"]} emptyMessage="Empty!"/>', () => {
  describe('render()', () => {
    test('renders the list', () => {
      const wrapper = shallow(<List elements={["a": "a", "b": "b"]} emptyMessage="Empty!">Test children</List>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
