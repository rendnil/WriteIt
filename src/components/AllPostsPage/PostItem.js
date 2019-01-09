import React from "react"


class PostItem extends React.Component{
  render(){
    return(
      <div style={{borderStyle: "solid", borderWidth:"2px", marginBottom:"2%"}}>
      <li>{this.props.post.title}</li>
      <li style={{position:"relative", left:"10%"}}>{this.props.post.content}</li>
      </div>
    )
  }
}

export default PostItem
