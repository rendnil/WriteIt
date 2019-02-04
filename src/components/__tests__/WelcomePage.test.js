import React from "react"
import {mount} from 'enzyme'
import Root from "../../Root"
import WelcomePage from "../WelcomePage/WelcomePage"
import LogIn from "../WelcomePage/LogIn"
import SignUp from "../WelcomePage/SignUp"

let wrapped

beforeEach(()=>{
  wrapped = mount(
    <Root>
      <WelcomePage/>
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it ('contains LogIn component',() => {
  expect(wrapped.find(LogIn).length).toEqual(1)
})
