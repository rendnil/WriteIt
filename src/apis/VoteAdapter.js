const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export default class VoteAdapter{
  static upvote(userId, postId){
    return(
      fetch(`${API_BASE_URL}/votes`,{
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          vote:{
            voter_id: userId,
            post_id: postId,
            upvote: true
          }
        })
      })//end fetch
      .then(r=>r.json())
    )
  }

}
