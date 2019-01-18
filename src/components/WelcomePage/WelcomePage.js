import React from "react"
import { connect } from 'react-redux'
import {Redirect} from "react-router"
import LogIn from "./LogIn"
import SignUp from "./SignUp"

const WelcomePage = (props) => {
  console.log("USER STATE", props.user);

  if (props.loggedIn){
    return <Redirect to="/" />
  }else{

    return(
      <div>
      <h1>Welcome</h1>
      <LogIn />
      <SignUp />

      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return{
    user:state.user,
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps)(WelcomePage)
