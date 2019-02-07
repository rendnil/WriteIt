import React from "react"
import {mount} from "enzyme"
import Root from "../../Root"
import PostPage from "../PostPage/PostPage"
import PostContent from "../PostPage/PostContent"
import CommentsContainer from "../PostPage/CommentsContainer"
import { MemoryRouter } from 'react-router'

let wrapped

beforeEach(() => {
  wrapped = mount(
    <Root>
      <MemoryRouter>
      <PostPage match={{params:{id:1}}}/>
      </MemoryRouter>
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('contains PostContent and CommentsContainer components',() => {
  expect(wrapped.find(PostContent).length).toEqual(1)
  expect(wrapped.find(CommentsContainer).length).toEqual(1)
})
