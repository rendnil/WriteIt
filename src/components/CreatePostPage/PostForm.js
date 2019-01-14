import React from "react"


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

export default PostForm
