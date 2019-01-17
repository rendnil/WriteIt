import UserAdapter from "../../apis/UserAdapter"

export const signUpUser = (username, password)=>{
  return (dispatch)=>{
    UserAdapter.createUser(username, password)
    .then(r=>console.log(r))
  }
}
