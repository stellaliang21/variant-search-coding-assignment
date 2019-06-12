import React from 'react';
import { shallow } from 'enzyme';
import App from './components/App.jsx';



describe('Component mounts and renders', () => {
  test ('Should mount and render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
});

describe('App Component', () => {
  test ('Should render without errors', () => {
    const component = shallow(<App />);
    const wrapper = component.find('.parentComponent');
    expect(wrapper.length).toBe(1);
  });

});
