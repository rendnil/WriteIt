import React from "react"
import {shallow} from 'enzyme'
import WelcomePage from "../WelcomePage/WelcomePage"
import LogIn from "../WelcomePage/LogIn"
import SignUp from "../WelcomePage/SignUp"

let wrapped

beforeEach(()=>{
  wrapped = shallow(<WelcomePage/>)
})

it ('contains LogIn component',() => {
  console.log(wrapped)
  expect(wrapped.find(LogIn).length).toEqual(1)
})
