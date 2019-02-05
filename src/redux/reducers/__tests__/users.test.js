import usersReducer from "../usersReducer"

const defaultState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null,
  failedSignUp: false
}

it('handles actions of unknown type',() => {
  const action = {
    type:"some random type"
  }
  const newState = usersReducer(defaultState, action)
  expect(newState).toEqual(defaultState)
})

it('handles actions of type SET_CURRENT_USER',() => {
  const action = {
    type:'SET_CURRENT_USER',
    payload: {id:5, username:"username5"}
  }

  const newState = usersReducer(defaultState,action)
  expect(newState)

})
