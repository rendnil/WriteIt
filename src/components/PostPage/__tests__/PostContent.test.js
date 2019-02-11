import React from "react"
import {shallow} from 'enzyme'
import Root from "../../../Root"
import PostContent from "../PostContent"


let wrapped

beforeEach(() => {
  const initialState = {
    posts: {
      selectedPost: {id: 1, author_id: 1, title: "Title1", content: "Content1"}
    }
  }
  wrapped = shallow(
    <Root initialState={initialState}>
      <PostContent />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('contains title and content text',() => {
  expect(wrapped.render().text()).toContain('Title1')
  expect(wrapped.render().text()).toContain('Content1')
})
