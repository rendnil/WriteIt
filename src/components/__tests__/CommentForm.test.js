import React from "react"
import {mount} from 'enzyme'
import Root from "../../Root"
import CommentForm from "../PostPage/CommentForm"

let wrapped

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentForm />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('has a text area',() => {
  expect(wrapped.find('textarea').length).toEqual(1)
})

describe('the text area',() => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change',{target:{value: "New Comment", name:'content'}})
    wrapped.update()
  })

  it("responds to user's input",() => {
    expect(wrapped.find('textarea').prop('value')).toEqual('New Comment')
  })

})//end text area describe
