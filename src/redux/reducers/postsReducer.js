const defaultState = {
  posts: [],
  selectedPost: null
}
let otherPosts = []

const postsReducer = (state=defaultState, action) =>{
  switch(action.type){
    case "FETCH_ALL_POSTS":
      return {...state, posts:action.payload}
    case "UPDATE_UPVOTES":
      otherPosts = state.posts.filter((post)=>{
        return post.id !== action.payload.post.id
      })
      return {...state, posts:[...otherPosts, action.payload.post]}

    case "CREATE_POST":
      return {...state, posts:[...state.posts, action.payload]}

    case "SELECT_POST":
      //find the post
      let post = state.posts.find((post)=>post.id === action.payload)
      return {...state, selectedPost: post}

    default:
        return state
  }
}

export default postsReducer
