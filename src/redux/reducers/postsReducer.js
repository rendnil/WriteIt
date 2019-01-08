const defaultState = []

const postsReducer = (state=defaultState, action) =>{
  switch(action.type){
    case "FETCH_ALL_POSTS":
      return action.payload
      break

    default:
        return state
  }
}

export default postsReducer
