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

  const oldState = {selectedPost: null, posts:['Post1', 'Post2', 'Post3']}
  const newState = postsReducer(oldState, action)
  expect(newState).toEqual(
    {selectedPost: null,
      posts: ['Post1', 'Post2', 'Post3','Post4']
  })

})

it('handles actions of type UPDATE_UPVOTES',() => {
  const action = {
    type:"UPDATE_UPVOTES",
    payload:{
      post: {id:3, title:"Post3 Title", content:"Post3 Content",
            upvotes:7, downvotes:3, author_id: 7
      }
    }
  }

  const oldState = {
    selectedPost: null,
    posts:[
      {id:1, title:"Post1 Title", content:"Post1 Content", upvotes:2, downvotes:1, author_id:5},
      {id:2, title:"Post2 Title", content:"Post2 Content", upvotes:4, downvotes:2, author_id:6},
      {id:3, title:"Post3 Title", content:"Post3 Content", upvotes:6, downvotes:3, author_id:7},
      {id:4, title:"Post4 Title", content:"Post4 Content", upvotes:8, downvotes:4, author_id:8}
    ]
  }

  const newState = postsReducer(oldState, action)
  expect(newState).toEqual(
    {
      selectedPost: null,
      posts:[
        {id:1, title:"Post1 Title", content:"Post1 Content", upvotes:2, downvotes:1, author_id:5},
        {id:2, title:"Post2 Title", content:"Post2 Content", upvotes:4, downvotes:2, author_id:6},
        {id:4, title:"Post4 Title", content:"Post4 Content", upvotes:8, downvotes:4, author_id:8},
        {id:3, title:"Post3 Title", content:"Post3 Content", upvotes:7, downvotes:3, author_id:7}
      ]
    }
  )

})

it('handles actions of type SELECT_POST',() => {
  const action = {
    type:"SELECT_POST",
    payload:2
  }

  const oldState = {
    selectedPost: null,
    posts:[
      {id:1, title:"Post1 Title", content:"Post1 Content", upvotes:2, downvotes:1, author_id:5},
      {id:2, title:"Post2 Title", content:"Post2 Content", upvotes:7, downvotes:2, author_id:7},
      {id:3, title:"Post3 Title", content:"Post3 Content", upvotes:6, downvotes:3, author_id:7},
      {id:4, title:"Post4 Title", content:"Post4 Content", upvotes:8, downvotes:4, author_id:8}
    ]
  }

  const newState = postsReducer(oldState, action)
  expect(newState).toEqual(
    {
      posts:[
        {id:1, title:"Post1 Title", content:"Post1 Content", upvotes:2, downvotes:1, author_id:5},
        {id:2, title:"Post2 Title", content:"Post2 Content", upvotes:7, downvotes:2, author_id:7},
        {id:3, title:"Post3 Title", content:"Post3 Content", upvotes:6, downvotes:3, author_id:7},
        {id:4, title:"Post4 Title", content:"Post4 Content", upvotes:8, downvotes:4, author_id:8}
      ],
      selectedPost: {id:2, title:"Post2 Title", content:"Post2 Content", upvotes:7, downvotes:2, author_id: 7}
    }
  )

})
