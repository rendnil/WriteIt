const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export default class PostAdapter{

  static getAllPosts(){
    return(
      fetch(`${API_BASE_URL}/posts`)
      .then(r=>r.json())
    )
  }

  static createPost(userId, title, content){
    return(
      fetch(`${API_BASE_URL}/posts`,{
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          post:{
            user_id: userId,
            title: title,
            content: content
          }
        })
      })//end fetch
      .then(r=>r.json())
    )
  }
  static updatePostUpvotes(id, upvotes){
    return(
      fetch(`${API_BASE_URL}/posts/${id}`,{
        method: "PATCH",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          post:{
            upvotes: upvotes
          }
        })
      })//end fetch
      .then(r=>r.json())
    )
  }

  static updatePostDownvotes(id, downvotes){
    return(
      fetch(`${API_BASE_URL}/posts/${id}`,{
        method: "PATCH",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          post:{
            downvotes: downvotes
          }
        })
      })//end fetch
      .then(r=>r.json())
    )
  }


}
