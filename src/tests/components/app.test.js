import React from 'react';
import { mount } from 'enzyme';
import App from '../../App';

describe("Test the App file",()=>{
  
  test('Snapshot of App component', () => {
    const wrapper = mount(<App/>);
    expect(wrapper).toMatchSnapshot();
    });

  test('test handleIncrement function in App component', () => {
    //const wrapper = shallow(<App/>);
    
    //expect(text).toBe("4Items");
    });

  test('test handleIncrement function in App component', () => {
    //const wrapper = shallow(<App/>);
    
    //expect(text).toBe("4Items");
    });

  test('test handleIncrement function in App component', () => {
    //const wrapper = shallow(<App/>);
    
    //expect(text).toBe("4Items");
    });

  test('test handleIncrement function in App component', () => {
    //const wrapper = shallow(<App/>);
    
    //expect(text).toBe("4Items");
    });

  test('test handleIncrement function in App component', () => {
    //const wrapper = shallow(<App/>);
    
    //expect(text).toBe("4Items");
    });
        
});