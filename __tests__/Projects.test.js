import React from 'react'
import Projects from '../client/components/Projects'
import Enzyme, { shallow, ShallowWrapper } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new EnzymeAdapter()})
/**
 * Setup is a factory funciont to create a ShallowWraper for the Project component
 * @function setup
 * @param {object} props = Component props specific to this setup
 * @param {any} state = Initial state for setup
 * @returns {ShallowWrapper} 
  */
const setup = (props={}, state=null) => {
    return shallow(<Projects {...props}/>)
}

/**
 * Return ShallowWraper containing nodes(S) with the diven data-test value
 * @param {ShallowWrapper} wraper = Enzyme shallow wraper to search with
 * @param {string} val = Value of data-test attributte for search
 * @returns {ShallowWrapper}
 */

 const findByTestAtt = (wraper, val) => {
     return wraper.find(`[data-test="${val}"]`)
 }
 const findByClass= (wraper, val) => {
    return wraper.find(val)
}

test('renders Root without errors', ()=> {
  const wraper = setup()
//   console.log(wraper.debug())
  expect(wraper).toBeTruthy()
})
test('container length is equal to 1', ()=> {
    const wraper = setup()
    const appComponent = findByTestAtt(wraper, "container")
    expect(appComponent.length).toBe(1)
})
test('renders container without errors', ()=> {
    const wraper = setup()
    const appComponent = findByTestAtt(wraper, "container")
    expect(appComponent).toBeTruthy()
})
test('its rendering a total of 5 projects with classname proj', ()=> {
    const wraper = setup()
    const projects = findByClass(wraper, '.proj')
    expect(projects.length).toBe(5)
})