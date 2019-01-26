import React from "react"
import { connect } from 'react-redux'
import {createPost} from "../../redux/actions/createPostAction"
import {Redirect} from "react-router"

class PostForm extends React.Component{
  state = {
    title: "",
    content: "",
    submitted: false
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createPost(this.props.user.id, this.state.title, this.state.content)
    this.setState({submitted:true})

  }

  render(){
    console.log(this.state.content);
    if (!this.state.submitted){

      return(
        <div>
        <h1>Post Form</h1>
        <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.title} name="title"id="postTitle" type = "text" placeholder="Title"/>
        <br/>
        <textarea onChange={this.handleChange} value={this.state.content} name="content" id="postContent" rows="10" cols="20" placeholder="Content"/>
        <br/>
        <input type="submit" value="Submit"/>
        </form>
        </div>
      )
    }else{
      return (<Redirect to="/"/>)
    }
  }

}

const mapStateToProps = (state) => {
  return{user:state.user.user}
}


const mapDispatchToProps = (dispatch) => {
  return {createPost: (userId, title, content) => (dispatch(createPost(userId, title, content)))}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
