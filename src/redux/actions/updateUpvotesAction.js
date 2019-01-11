import PostAdapter from "../../apis/PostAdapter"

export const updateUpvotes = () => {
  return (dispatch) => {
    PostAdapter.updatePostUpvotes()
    .then((data) => {
      dispatch({type:"UPDATE_UPVOTES", payload:data})
    })
  }
}
