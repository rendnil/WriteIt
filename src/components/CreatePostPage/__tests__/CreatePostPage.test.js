import React from "react"
import {mount} from 'enzyme'
import { MemoryRouter } from 'react-router'
import Root from "../../../Root"
import CreatePostPage from "../CreatePostPage"
import PostForm from "../PostForm"

let wrapped

beforeEach(()=>{
  localStorage.setItem('jwt', "123")
  const initialState = {
   user:{loggedIn:true}
  }
  wrapped = mount(
    <Root initialState={initialState}>
      <MemoryRouter>
        <CreatePostPage/>
      </MemoryRouter>
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
  localStorage.removeItem('jwt')
})

it ('contains PostForm component',() => {
  expect(wrapped.find(PostForm).length).toEqual(1)
})
