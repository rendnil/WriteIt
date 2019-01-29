
export const selectPost = (postId) => {
  return{type:"SELECT_POST", payload: parseInt(postId)}
}
