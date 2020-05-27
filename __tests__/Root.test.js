import React from 'react'
import Root from '../client/components/Root'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new EnzymeAdapter()})


test('renders Root without errors', ()=> {
  const wraper = shallow(<Root />)
//   console.log(wraper.debug())
  expect(wraper).toBeTruthy()
})