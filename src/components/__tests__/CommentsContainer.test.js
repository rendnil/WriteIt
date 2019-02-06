import React from "react"
import {mount} from "enzyme"
import Root from "../../Root"
import CommentsContainer from "../PostPage/CommentsContainer"
import CommentsList from "../PostPage/CommentsList"
import CommentForm from "../PostPage/CommentForm"

let wrapped

beforeEach(()=>{
  wrapped = mount(
    <Root>
      <CommentsContainer/>
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('contains CommentsList and CommentForm components',() => {
  expect(wrapped.find(CommentsList).length).toEqual(1)
  expect(wrapped.find(CommentForm).length).toEqual(1)
})
