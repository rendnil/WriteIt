import commentsReducer from "../commentsReducer"

it('handles actions with unknown type',() => {
  const action = {
    type: "some random type"
  }

  const newState = commentsReducer([], action)
  expect(newState).toEqual([])
})

it('handles actions of type FETCH_COMMENTS',() => {
  const action = {
    type: "FETCH_COMMENTS",
    payload: ['Comment1', 'Comment2', 'Comment3']
  }

  const newState = commentsReducer([], action)
  expect(newState).toEqual(['Comment1', 'Comment2', 'Comment3'])

})

it('handles actions of type CREATE_COMMENT',() => {
  const action = {
    type: "CREATE_COMMENT",
    payload: "Comment4"
  }

  const oldState = ['Comment1', 'Comment2', 'Comment3']
  const newState = commentsReducer(oldState, action)
  expect(newState).toEqual(['Comment1', 'Comment2', 'Comment3', 'Comment4'])
})
