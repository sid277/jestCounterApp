import React from 'react';
import { shallow} from 'enzyme';
import Counter from '../../components/counter';

describe("Test the Counter file",()=>{

  const data = { id: 1, value: 2 };

  test('should test snapshot of Counter component', () => {
    const wrapper = shallow(<Counter counter={data}/>);
    expect(wrapper).toMatchSnapshot();
    });

  test('should test the value showing in Counter component', () => {
    const wrapper = shallow(<Counter key={data.id} counter={data}/>);
    const displayValue = wrapper.find('span');
    expect(displayValue.text()).toBe("2");
    });

  test('test the increment button', () => {
    let mockFn = jest.fn();
    const wrapper = shallow(<Counter key={data.id} counter={data} onIncrement={mockFn}/>);
    wrapper.find('[className="btn btn-secondary"]').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  test('test the decrement button', () => {
    let mockFn = jest.fn();
    const wrapper = shallow(<Counter key={data.id} counter={data} onDecrement={mockFn}/>);
    wrapper.find('[className="btn btn-info m-2"]').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  test('test the decrement button is disabled on counter.value ==0',()=>{
    let data1 = {id:1, value:0};
    const wrapper = shallow(<Counter key={data1.id} counter={data1}/>);
    const decrementBtn = wrapper.find('[className="btn btn-info m-2"]');
    expect(decrementBtn).toBeDisabled();
  });

  test('test the delete button', () => {
    let mockFn = jest.fn();
    const wrapper = shallow(<Counter key={data.id} counter={data} onDelete={mockFn}/>);
    wrapper.find('[className="btn btn-danger"]').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  test('test the classname of span tag', () => {
    const wrapper = shallow(<Counter key={data.id} counter={data}/>);
    expect(wrapper.find('span').hasClass('badge m-2 badge-primary')).toBe(true);
  });

});