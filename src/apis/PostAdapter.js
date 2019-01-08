const apiBaseUrl = process.env.REACT_APP_API_BASE_URL

export default class PostAdapter{

  static getAllPosts(){
    return(
      fetch(`${apiBaseUrl}/posts`)
      .then(r=>r.json)
    )
  }
}
