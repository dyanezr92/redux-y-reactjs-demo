import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

import UserText from '../../components/UserText';

describe('<UserText key={1} text="Awesome comment" author="Finn" id={1} onDeleteClick={console::log} />', () => {
  describe('render()', () => {
    test('renders the user text', () => {
      const wrapper = shallow(
        <UserText key={1} text="Awesome comment" author="Finn" id={1} onDeleteClick={console.log} />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
