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
            author_id: userId,
            title: title,
            content: content
          }
        })
      })//end fetch
      .then(r=>r.json())
    )
  }
  


}
