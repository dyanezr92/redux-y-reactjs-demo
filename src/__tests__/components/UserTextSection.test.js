import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

import UserTextSection from '../../components/UserTextSection';

describe('<UserTextSection />', () => {
  describe('render()', () => {
    test('renders the user text section', () => {
      const wrapper = shallow(
        <UserTextSection elements={[ {"id": 1, "author": "Finn", "text": "Awesome comment!"}]}
          elementName="comments" onDeleteClick={ console.log } onSubmit={ console.log } />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
