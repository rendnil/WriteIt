const apiBaseUrl = process.env.REACT_APP_API_BASE_URL

export default class PostAdapter{

  static getAllPosts(){
    return(
      fetch(`${apiBaseUrl}/posts`)
      .then(r=>r.json())
    )
  }

  static updatePostUpvotes(id, upvotes){
    return(
      fetch(`${apiBaseUrl}/posts/${id}`,{
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
      fetch(`${apiBaseUrl}/posts/${id}`,{
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
