import React from "react"
import {mount} from 'enzyme'
import Root from "../../../Root"
import PostForm from "../PostForm"
import {TextField, Button} from '@material-ui/core';

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

it('has a text input for title',() => {
  expect(wrapped.find('input').length).toEqual(1)
})

describe('the text input for title',() => {
  beforeEach(() => {
    wrapped.find('input').simulate('change',{
      target:{
        name:"title",
        value:"New Title"
      }
    })
    wrapped.update()
  })

  it('responds to user input',() => {
    expect(wrapped.find('input').prop('value')).toEqual("New Title")
  })
})

it('has a text area input for content',() => {
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

it('contains submit btn',() => {
  expect(wrapped.find('button').length).toEqual(1)
})
