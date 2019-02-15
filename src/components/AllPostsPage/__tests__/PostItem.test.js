import React from "react"
import {mount} from "enzyme"
import Root from "../../../Root"
import PostItem from "../PostItem"

let wrapped

beforeEach(() => {
  const initialState = {
    post:{
      id:1, title:"Title", content:"Content"
    }
  }

  wrapped = mount(
    <Root initialState={initialState}>
      <PostItem />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('contains upvote btn',() => {
  expect(wrapped.find('btn').length).toEqual(3)
})
