import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

import UserTextList from '../../components/UserTextList';

describe('<UserTextList onUserTextSubmit={ console.log } elementName="comment" />', () => {
  describe('render()', () => {
    test('renders the user text list', () => {
      const wrapper = shallow(
        <UserTextList elements={[ {"id": 1, "author": "Finn", "text": "Awesome comment!"}]} elementName="comments" onDeleteClick={ console.log }/>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
