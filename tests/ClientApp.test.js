import React from 'react';
import { shallow, configure } from 'enzyme';
import MyComponent from '../scripts/components/ClientApp';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ClientApp component', () => {
  it('should just render a plain ol snapshot', () => {
    const wrapper = shallow(<MyComponent />);

    expect(wrapper).toMatchSnapshot();
  });
});
