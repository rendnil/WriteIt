import React from "react"
import { connect } from 'react-redux'
import LogIn from "./LogIn"
import SignUp from "./SignUp"


const WelcomePage = (props) => {
  console.log("USER STATE", props.user);
  return(
    <div>
    <h1>Welcome</h1>
    <LogIn />
    <SignUp />

    </div>
  )

}

const mapStateToProps = (state) => {
  return{user:state.user}
}

export default connect(mapStateToProps)(WelcomePage)
