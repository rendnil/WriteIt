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
    case "SET_CURRENT_USER":
      return {...state, user:action.payload}


    default:
      return state
  }
}
