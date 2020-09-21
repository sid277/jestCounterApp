import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../../components/navbar';

describe("Test the navbar file",()=>{
  
  test('should test NavBar component', () => {
    const wrapper = shallow(<NavBar/>);
    expect(wrapper).toMatchSnapshot();
    });

  test('should test NavBar component', () => {
    const wrapper = shallow(<NavBar totalCounters={4}/>);
    const text = wrapper.text();
    expect(text).toBe("4Items");
    });

});