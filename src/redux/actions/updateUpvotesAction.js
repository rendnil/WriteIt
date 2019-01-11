import PostAdapter from "../../apis/PostAdapter"

export const updateUpvotes = (id, upvotes) => {
  return (dispatch) => {
    PostAdapter.updatePostUpvotes(id, upvotes)
    .then((data) => {
      dispatch({type:"UPDATE_UPVOTES", payload:data})
    })
  }
}
export const updateDownvotes = (id, downvotes) => {
  return (dispatch) => {
    PostAdapter.updatePostDownvotes(id, downvotes)
    .then((data) => {
      dispatch({type:"UPDATE_DOWNVOTES", payload:data})
    })
  }
}
