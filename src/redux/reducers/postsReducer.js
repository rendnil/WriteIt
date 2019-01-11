const defaultState = []

const postsReducer = (state=defaultState, action) =>{
  switch(action.type){
    case "FETCH_ALL_POSTS":
      return action.payload
    case "UPDATE_UPVOTES":
      const otherPosts = state.filter((post)=>{
        return post.id !== action.payload.id
      })
      return [...otherPosts, action.payload]

    default:
        return state
  }
}

export default postsReducer
