import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../TodoList';
import toJson from 'enzyme-to-json';

describe(<TodoList />, () => {

  describe('render', () => {
    let component;
    beforeEach( () => {
      component = shallow(<TodoList />);
    });

    it ('matches snapshot', () => {
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('functionality', () => {
    let component;
    beforeEach( () => {
      component = shallow(<TodoList />);
    });

    it('updates state on change', () => {
      let input = component.find('input')
      input.simulate('focus')
      input.simulate('change', {target: {name: 'name', value: 'Hello'}})
      expect(component.state('name')).toEqual('Hello')
    })
  })
});