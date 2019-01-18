import React from "react"
import { connect } from 'react-redux'
import {logInUser} from "../../redux/actions/userAction"

class LogIn extends React.Component{
  state = {
    username:"",
    password:""
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.logInUser(this.state.username, this.state.password)

  }

  render(){

    return(
      <div>
      <h1>LogIn</h1>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.username} name="username"type = "text" placeholder="username"/>
        <br/>
        <input onChange={this.handleChange} value={this.state.password} name="password"type = "text" placeholder="password"/>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{logInUser: (username,password)=>dispatch(logInUser(username,password))}
}

export default connect(null,mapDispatchToProps)(LogIn)
