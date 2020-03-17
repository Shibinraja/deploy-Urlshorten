import React from 'react';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme';
import App from './App';
import Body from './Component/Body';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Body component', () => {
  it('url has empty value',()=>{
    const wrapper = shallow(<Body/>);
    const text = wrapper.find('input').value();
    expect(value).toEqual('url:""') ;
  });
});

describe('App component', ()=>{
  it ("url changes when the handlesubmit is clicked",()=>{
      const wrapper = shallow(<App/>);
      const submit = wrapper.find('OriginalUrl.handlesubmit');
            submit.simulate('function()');
      const text = wrapper.find(<Body/>)
      expect(url).toEqual('url:""')
  })
})
