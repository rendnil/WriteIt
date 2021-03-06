const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export default class UserAdapter{
  static createUser(username, password){
    return(
      fetch(`${API_BASE_URL}/users`,{
        method: "POST",
        headers:{
          "Acccept": "application/json",
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          user:{
            username: username,
            password: password
          }
        })//end body
      })//end fetch
    )
  }

  static logInUser(username, password){
    return(
      fetch(`${API_BASE_URL}/login`,{
        method: "POST",
        headers:{
          "Acccept": "application/json",
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          user:{
            username: username,
            password: password
          }
        })//end body
      })//end fetch
    )
  }

  static fetchCurrentUser(){
    return(
      fetch(`${API_BASE_URL}/profile`,{
        headers:{
          "Authorization": `Bearer ${localStorage.getItem('jwt')}`
        }
      })
    )
  }


}
