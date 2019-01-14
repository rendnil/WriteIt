import React from "react"
import { connect } from 'react-redux'
import {createPost} from "../../redux/actions/createPostAction"
import {Redirect} from "react-router"

class PostForm extends React.Component{
  state = {
    title: "",
    content: ""
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createPost(12, this.state.title, this.state.content)

  }

  render(){
    return(
      <div>
      <h1>Post Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.title} name="title"id="postTitle" type = "text" placeholder="Title"/>
          <br/>
          <textarea onChange={this.handleChange} name="content" id="postContent" rows="10" cols="20" placeholder="Content"/>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {createPost: (userId, title, content) => (dispatch(createPost(userId, title, content)))}
}

export default connect(null, mapDispatchToProps)(PostForm)
