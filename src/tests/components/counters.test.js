import React from 'react';
import { shallow } from 'enzyme';
import Counters from '../../components/counters';

describe("Test the Counters file",()=>{

  const data = [
      { id: 1, value: 2 },
      { id: 2, value: 3 },
      { id: 3, value: 1 },
      { id: 4, value: 4 }
    ];

  const data1 = [
    {}
  ];
  
  test('should test Counters component snapshot', () => {
    const wrapper = shallow(<Counters counters={data}/>);
    expect(wrapper).toMatchSnapshot();
    });

  test('should test Counters reset button', () => {
    const wrapper = shallow(<Counters counters={[]}/>);
    const disableProp = wrapper.find('[className="btn btn-success m-2"]');
    expect(disableProp).toBeDisabled();
    });

  test('should test the click of reset button of Counters component',() => {
    let mockFn = jest.fn();
    const wrapper = shallow(<Counters counters={data} onReset={mockFn}/>);
    const disableProp = wrapper.find('[className="btn btn-success m-2"]');
    disableProp.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  test('should test the restart button of Counters component',() => {
    const wrapper = shallow(<Counters counters={data}/>);
    const disableProp = wrapper.find('[className="btn btn-primary m-2"]');
    expect(disableProp).toBeDisabled();
  });

  test('should test the click of restart button of Counters component',() => {
    let mockFn = jest.fn();
    const wrapper = shallow(<Counters counters={data1}  onRestart={mockFn}/>);
    wrapper.find('[className="btn btn-primary m-2"]').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

});

