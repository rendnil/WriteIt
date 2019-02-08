import React from "react"
import {mount} from 'enzyme'
import { MemoryRouter } from 'react-router'
import Root from "../../Root"
import AllPostsPage from "../AllPostsPage/AllPostsPage"
import PostsList from "../AllPostsPage/PostsList"

let wrapped

beforeEach(()=>{
  localStorage.setItem('jwt', "123")
  const initialState = {
   user:{loggedIn:true}
  }
  wrapped = mount(
    <Root initialState={initialState}>
      <MemoryRouter>
        <AllPostsPage/>
      </MemoryRouter>
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
  localStorage.removeItem('jwt')
})

it ('contains PostsList component',() => {
  expect(wrapped.find(PostsList).length).toEqual(1)
})
