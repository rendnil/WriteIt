const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export default class CommentsAdapter{
  static fetchPostComments(postId){
    return(
      fetch(`${API_BASE_URL}/posts/${postId}/comments`)
      .then(r=>r.json())
    )
  }

  static createComment(postId, commenterId, content){
    return(
      fetch(`${API_BASE_URL}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          comment:{
            post_id: postId,
            commenter_id: commenterId,
            content: content
          }
        })
      })//end fetch
      .then(r=>r.json())
    )
  }



}
