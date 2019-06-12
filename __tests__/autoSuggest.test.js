import React from 'react';
import { shallow } from 'enzyme';
import AutoSuggest from '../client/src/components/AutoSuggest.jsx';



describe('Component mounts and renders', () => {
  
  it('Should mount and render', () => {
    const wrapper = shallow(<AutoSuggest />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('test', () => {
    const wrapper = shallow(<AutoSuggest />);
    let prevented = false;
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {
        prevented = true
      }
    });
    expect(prevented).toBe(false);
  });

});