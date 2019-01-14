import PostAdapter from "../../apis/PostAdapter"

export const createPost = (userId, title, content) => {
  return (dispatch) => {
    PostAdapter.createPost(userId, title, content)
    .then((data) => {
      dispatch({type:"CREATE_POST", payload:data})
    })
  }
}
