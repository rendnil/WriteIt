const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export default class CommentsAdapter{
  static fetchPostComments(postId){
    return(
      fetch(`${API_BASE_URL}/posts/${postId}/comments`)
      .then(r=>r.json())
    )
  }



}
