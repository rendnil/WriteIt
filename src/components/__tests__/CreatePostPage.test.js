import React from "react"
import {mount} from 'enzyme'
import Root from "../../Root"
import CreatePostPage from "../CreatePostPage/CreatePostPage"
import PostForm from "../CreatePostPage/PostForm"


let wrapped

beforeEach(()=>{
  wrapped = mount(
    <Root>
      <CreatePostPage/>
    </Root>
  )
})

it ('contains PostPage component',() => {
  console.log(wrapped)
  expect(wrapped.find(PostPage).length).toEqual(1)
})
