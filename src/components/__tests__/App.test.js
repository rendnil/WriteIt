import React from "react"
import {shallow} from 'enzyme'
import App from "../App"
import NavBar from "../NavBar"


let wrapped

beforeEach(()=>{
  wrapped = shallow(<App />)
})


it(`has a navbar`,() => {
  expect(wrapped.find(NavBar).length).toEqual(1)
})
