import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';

describe('App test', () => {
  
  it ('Should mount and render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it ('Should render without errors', () => {
    const component = shallow(<App />);
    const wrapper = component.find('.parentComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render InfoTable', () => {
    const wrapper = shallow(<App />);
    expect(wrapper
      .find('InfoTable').debug())
      .toEqual('<InfoTable geneInformation={{...}} />')
  });

  it('Should find the text of a child of a div in App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper
      .find('div').childAt(0).text())
      .toBe('<AutoSuggest />');
  });

});



