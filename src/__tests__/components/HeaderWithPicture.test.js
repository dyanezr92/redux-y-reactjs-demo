import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

import HeaderWithPicture from '../../components/HeaderWithPicture';
import finn from '../../static/finn.gif'

describe('<HeaderWithPicture title="Awesome Finn" src={ finn } />', () => {
  describe('render()', () => {
    test('renders the header', () => {
      const wrapper = shallow(<HeaderWithPicture title="Awesome Finn" src={ finn } numComments={1} numComplaints={2} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
