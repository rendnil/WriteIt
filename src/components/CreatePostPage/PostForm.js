import React from "react"
import { connect } from 'react-redux'
import {createPost} from "../../redux/actions/createPostAction"
import {Redirect} from "react-router"
import {TextField} from '@material-ui/core';

// <TextField
//          id="outlined-name"
//          label="Name"
//          className={classes.textField}
//          value={this.state.name}
//          onChange={this.handleChange('name')}
//          margin="normal"
//          variant="outlined"
//        />

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
    if (!this.state.submitted){
      return(
        <div style={{maxWidth:"60%", margin:"auto"}}>
        <h1>Post Form</h1>
        <form onSubmit={this.handleSubmit}>
        <TextField
                name="title"
                label="Title"
                value={this.state.title}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                fullWidth="true"
              />
        {/*<input onChange={this.handleChange} value={this.state.title} name="title"id="postTitle" type = "text" placeholder="Title"/> */}
        <br/>
        <TextField
                name="content"
                label="Content"
                value={this.state.content}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                fullWidth="true"
                multiline="true"
                rows="10"
              />
        {/*<textarea onChange={this.handleChange} value={this.state.content} name="content" id="postContent" rows="10" cols="20" placeholder="Content"/>*/}
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
