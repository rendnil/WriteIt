const defaultState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null,
  failedSignUp: false
}

export default function(state=defaultState, action){
  switch(action.type){


    default:
      return state
  }
}
