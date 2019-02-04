import postsReducer from "../postsReducer"

const defaultState = {
  posts: [],
  selectedPost: null
}

it('handles actions with unknown type',() => {
  const action = {
    type: "some random type"
  }

  const newState = postsReducer([], action)
  expect(newState).toEqual([])
})

it('handles actions of type FETCH_ALL_POSTS',() => {
  const action = {
    type: "FETCH_ALL_POSTS",
    payload: ['Post1', 'Post2', 'Post3']
  }

  const newState = postsReducer(defaultState, action)
  expect(newState).toEqual(
    {selectedPost: null,
      posts:['Post1', 'Post2', 'Post3']
    })
})

it('handles actions of type CREATE_POST',() => {
  const action = {
    type: "CREATE_POST",
    payload: 'Post4'
  }

  const newState = postsReducer({selectedPost: null, posts:['Post1', 'Post2', 'Post3']}, action)
  expect(newState).toEqual(
    {selectedPost: null, 
      posts: ['Post1', 'Post2', 'Post3','Post4']
  })

})
