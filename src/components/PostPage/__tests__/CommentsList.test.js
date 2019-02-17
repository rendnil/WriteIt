import React from "react"
import {mount} from "enzyme"
import Root from "../../../Root"
import CommentsList from "../CommentsList"
import CommentItem from "../CommentItem"
import { MemoryRouter } from 'react-router'

let wrapped

beforeEach(() => {
  const initialState = {
    comments: [
      {id: 1, title: "Comment1"},
      {id: 2, title: "Comment2"}
    ]
  }


  wrapped = mount(
    <Root initialState ={initialState}>
      <MemoryRouter>
      <CommentsList match={{params:{id:1}}}/>
      </MemoryRouter>
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('has comment item for each comment',() => {
  expect(wrapped.find(CommentItem).length).toEqual(2)
})
