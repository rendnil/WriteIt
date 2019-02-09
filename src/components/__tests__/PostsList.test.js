import React from "react"
import {mount} from "enzyme"
import Root from "../../Root"
import DateBuilder from "../../parsers/DateBuilder"
import PostsList from "../AllPostsPage/PostsList"
import PostItem from "../AllPostsPage/PostItem"
import { MemoryRouter } from 'react-router'

let wrapped

beforeEach(() => {
  const initialState = {
    posts:{
      posts: [
        {id:1, author_id:1, title: "Title1", content:"Content1"},
        {id:2, author_id:2, title: "Title2", content:"Content2"},
        {id:3, author_id:3, title: "Title3", content:"Content3"}
      ]
    }
  }

  wrapped = mount(
    <Root initialState={initialState}>
      <MemoryRouter>
        <PostsList />
      </MemoryRouter>
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('has PostItem component for every post',() => {
  expect(wrapped.find(PostItem).length).toEqual(3)
})
