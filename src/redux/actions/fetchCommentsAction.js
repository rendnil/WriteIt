import CommentsAdapter from "../../apis/CommentsAdapter"


export const fetchCommentAction = (postId) => {
  return (dispatch) => {
    CommentsAdapter.fetchPostComments(postId)
    .then(data=>{
      dispatch({type: "FETCH_COMMENTS", payload: data})
    })
  }
}
