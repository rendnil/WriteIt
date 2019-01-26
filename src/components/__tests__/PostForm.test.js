import React from "react"
import {mount} from 'enzyme'
import Root from "../../Root"
import PostForm from "../CreatePostPage/PostForm"


let wrapped

beforeEach(() => {
  wrapped = mount(
    <Root>
      <PostForm />
    </Root>
  )
})

it('has a text area',() => {
  expect(wrapped.find('textarea').length).toEqual(1)
})
