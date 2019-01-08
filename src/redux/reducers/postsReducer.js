const defaultState = []

const postsReducer = (state=defaultState, action) =>{
  switch(action.type){
    case "FETCH_ALL_POSTS":
      return action.payload

    default:
        return state
  }
}

export default postsReducer
