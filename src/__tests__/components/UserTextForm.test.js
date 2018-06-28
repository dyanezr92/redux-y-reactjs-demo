import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

import UserTextForm from '../../components/UserTextForm';

describe('<UserTextForm onUserTextSubmit={ console.log } elementName="comment" />', () => {
  describe('render()', () => {
    test('renders the user form', () => {
      const wrapper = shallow(
        <UserTextForm onUserTextSubmit={ console.log } elementName="comment" />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('onSubmit()', () => {
    test('successfully calls the onSubmit handler', () => {
      const testValues = {
        author: '',
        text: '',
        handleSubmit: jest.fn(),
    };

    it('Submit works', () => {
        const component = shallow(
            <UserTextForm onUserTextSubmit={ console.log } elementName="comment" />
        );
        component.find('button').simulate('click');
        expect(testValues.handleSubmit).toHaveBeenCalledTimes(1);
        expect(testValues.handleSubmit).toBeCalledWith({author: testValues.author, text: testValues.text});
    });
    });
  });
});
