import React from "react"


class PostForm extends React.Component{
  render(){
    return(
      <div>
      <h1>Post Form</h1>
      <form>
      <input id="postTitle" type = "text" placeholder="Title"/>
      <br/>
      <textarea id="postContent" rows="10" cols="20" placeholder="Content"/>
      <br/>
      <input type="submit" value="Submit"/>
      </form>
      </div>
    )
  }




}

export default PostForm
