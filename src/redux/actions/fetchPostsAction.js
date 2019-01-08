import PostAdapter from "../../apis/PostAdapter"

export const fetchPosts = () => {
  return (dispatch) => {
    PostAdapter.getAllPosts()
    .then((data) => {
      dispatch({type:"FETCH_ALL_POSTS", payload:data})
    })
  }
}
