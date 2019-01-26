import React from "react"
import { connect } from 'react-redux'
import {signUpUser} from "../../redux/actions/userAction"


class SignUp extends React.Component{
  state = {
    username:"",
    password:""
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.signUpUser(this.state.username,this.state.password)
  }

  render(){

    return(
      <div>
      <h1>SignUp</h1>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.username} id="username" name="username"type = "text" placeholder="username"/>
        <br/>
        <input onChange={this.handleChange} value={this.state.password} id="password" name="password"type = "text" placeholder="password"/>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{signUpUser: (username,password)=>dispatch(signUpUser(username,password))}
}

export default connect(null,mapDispatchToProps)(SignUp)
