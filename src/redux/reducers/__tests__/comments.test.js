import commentsReducer from "../commentsReducer"

it('handles actions of type FETCH_COMMENTS',() => {
  const action = {
    type: "FETCH_COMMENTS",
    payload: ['Comment1', 'Comment2', 'Comment3']
  }

  const newState = commentsReducer([], action)
  expect(newState).toEqual(['Comment1', 'Comment2', 'Comment3'])

})
