import VoteAdapter from "../../apis/VoteAdapter"

export const updateUpvotes = (userId, postId) => {
  return (dispatch) => {
    VoteAdapter.upvote(userId, postId)
    .then((data) => {
      dispatch({type:"UPDATE_UPVOTES", payload:data})
    })
  }
}
export const updateDownvotes = (id, downvotes) => {
  return (dispatch) => {
    VoteAdapter.updatePostDownvotes(id, downvotes)
    .then((data) => {
      dispatch({type:"UPDATE_DOWNVOTES", payload:data})
    })
  }
}
