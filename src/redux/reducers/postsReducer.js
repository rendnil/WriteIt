const defaultState = []
let otherPosts = []

const postsReducer = (state=defaultState, action) =>{
  switch(action.type){
    case "FETCH_ALL_POSTS":
      return action.payload
    case "UPDATE_UPVOTES":

      otherPosts = state.filter((post)=>{
        return post.id !== action.payload.post.id
      })
      return [...otherPosts, action.payload.post]
    case "UPDATE_DOWNVOTES":
      otherPosts = state.filter((post)=>{
        return post.id !== action.payload.post.id
      })
      return [...otherPosts, action.payload.post]

    case "CREATE_POST":
      return [...state, action.payload]

    default:
        return state
  }
}

export default postsReducer
