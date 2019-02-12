import CommentsAdapter from "../../apis/CommentsAdapter"

export const postComment = (postId, commenterId, content) => {
  return (dispatch) => {
    return CommentsAdapter.createComment(postId, commenterId, content)
    .then((data)=>{
      dispatch({type:"CREATE_COMMENT", payload: data})
    })
  }
}
