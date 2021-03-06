import UserAdapter from "../../apis/UserAdapter"

export const signUpUser = (username, password)=>{
  return (dispatch)=>{
    UserAdapter.createUser(username, password)
    .then((response)=>{
      if (response.ok){
        return response.json()
      }else{
        throw response
      }
    })
    .then(jsonResponse=>{
      localStorage.setItem('jwt', jsonResponse.jwt)
      dispatch(setCurrentUser(jsonResponse.user))
    })
    .catch(response => response.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
  }
}

export const logInUser = (username, password) =>{
  return (dispatch)=>{
    UserAdapter.logInUser(username, password)
    .then((response)=>{
      if (response.ok){
        return response.json()
      }else{
        throw response
      }
    })
    .then(jsonResponse=>{
      localStorage.setItem('jwt', jsonResponse.jwt)
      dispatch(setCurrentUser(jsonResponse.user))
    })
    .catch(response => response.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
  }
}

export const fetchCurrentUser = () =>{
  return (dispatch) =>{
    UserAdapter.fetchCurrentUser()
    .then((response)=>{
      if (response.ok){
        return response.json()
      }else{
        throw response
      }
    })
    .then(jsonResponse=>{
      dispatch(setCurrentUser(jsonResponse.user))
    })
    .catch(response => response.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
  }
}

export const signOut = () => {
  localStorage.removeItem("jwt")
  return {type:"SIGN_OUT"}
}

const setCurrentUser = (userData) => {
  return{
    type: 'SET_CURRENT_USER',
    payload: userData
  }}
