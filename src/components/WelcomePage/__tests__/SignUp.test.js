import React from "react"
import {mount} from "enzyme"
import Root from "../../../Root"
import SignUp from "../SignUp"


let wrapped

beforeEach(() => {
  wrapped = mount(
    <Root>
      <SignUp />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})


it('has username and password inputs',() => {
  expect(wrapped.find('#username').length).toEqual(1)
  expect(wrapped.find('#password').length).toEqual(1)
})

describe('the username field',() => {
  beforeEach(() => {
    wrapped.find('#username').simulate('change',{target:{name:"username", value:"SomeUsername"}})
    wrapped.update()
  })

  it('responds to user entry',() => {
    expect(wrapped.find("#username").prop('value')).toEqual("SomeUsername")
  })
})

describe('the password field',() => {
  beforeEach(() => {
    wrapped.find('#password').simulate('change',{target:{name:"password", value:"SomePassword"}})
    wrapped.update()
  })

  it('responds to user entry',() => {
    expect(wrapped.find("#password").prop('value')).toEqual("SomePassword")
  })
})
