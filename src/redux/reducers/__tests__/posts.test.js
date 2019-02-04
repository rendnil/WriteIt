import postsReducer from "../postsReducer"

it('handles actions with unknown type',() => {
  const action = {
    type: "some random type"
  }

  const newState = postsReducer([], action)
  expect(newState).toEqual([])
})
