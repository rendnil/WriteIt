import React from "react"


class PostItem extends React.Component{
  render(){
    return(
      <div style={{borderStyle: "solid", borderWidth:"2px", marginBottom:"2%"}}>
      <li>{this.props.post.title}</li>
      <li style={{position:"relative", left:"10%"}}>{this.props.post.content}</li>
      <li style={{position:"relative", left:"20%"}}>Upvotes: {this.props.post.upvotes}</li>
      <li style={{position:"relative", left:"20%"}}>Downvotes: {this.props.post.downvotes}</li>
      <li style={{position:"relative", left:"20%"}}>Net: {this.props.post.upvotes+this.props.post.downvotes} </li>

      <button>Up</button>
      <button>Down</button>


      </div>
    )
  }
}

export default PostItem
