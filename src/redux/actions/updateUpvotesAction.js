import VoteAdapter from "../../apis/VoteAdapter"

export const updateUpvotes = (userId, postId, vote) => {
  return (dispatch) => {
    VoteAdapter.postVote(userId, postId, vote)
    .then((data) => {
      dispatch({type:"UPDATE_UPVOTES", payload:data})
    })
  }
}
