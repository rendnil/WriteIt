import React from "react"
import {mount} from "enzyme"
import { MemoryRouter } from 'react-router'
import Root from "../../../Root"
import PostItem from "../PostItem"
import {IconButton} from '@material-ui/core';

let wrapped

beforeEach(() => {
  const props = {
    post:{
      id:1, title:"Title", content:"Content"
    }
  }

  wrapped = mount(
    <Root>
      <MemoryRouter>
      <PostItem post = {props.post}/>
      </ MemoryRouter>
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('contains upvote btn',() => {
  expect(wrapped.find(IconButton).length).toEqual(3)
})
