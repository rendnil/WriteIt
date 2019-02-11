import React from "react"
import {mount} from 'enzyme'
import Root from "../../../Root"
import PostForm from "../PostForm"


let wrapped

beforeEach(() => {
  wrapped = mount(
    <Root>
      <PostForm />
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
    wrapped.find('textarea').simulate('change',{
      target:{
        name:"content",
        value:"New Content"
      }
    })
    wrapped.update()
  })

  it('has a text area that responds to users',() => {
    expect(wrapped.find('textarea').prop('value')).toEqual("New Content")
  })


})
