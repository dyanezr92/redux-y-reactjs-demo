import React from 'react';
import { shallow } from 'enzyme';

import UserText from '../../components/UserText';

describe('<UserText ... />', () => {
  describe('render()', () => {
    test('renders the user text', () => {
      const onDeleteClick = jest.fn();
      const wrapper = shallow(
        <UserText key={1} text="Awesome comment" author="Finn" id={1} onDeleteClick={onDeleteClick} />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('successfully calls the onDeleteClick handler', () => {
    test('onDeleteClick works', () => {
        const onDeleteClick = jest.fn();
        const component = shallow(
            <UserText key={1} text="Awesome comment" author="Finn" id={1} onDeleteClick={onDeleteClick} />
        );
        component.find('img').simulate('click', { preventDefault: ()=> undefined })
        expect(onDeleteClick).toHaveBeenCalledTimes(1);
    });
  });
});
