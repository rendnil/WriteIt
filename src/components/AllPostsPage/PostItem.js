import React from "react"
import { connect } from 'react-redux'
import {updateUpvotes, updateDownvotes} from "../../redux/actions/updateUpvotesAction"

class PostItem extends React.Component{
  handleUpvotes = () => {
    this.props.updateUpvotes(this.props.post.id, this.props.post.upvotes+1)
  }
  handleDownvotes = () => {
    this.props.updateDownvotes(this.props.post.id, this.props.post.downvotes+1)
  }


  render(){
    console.log("render post ITEM", this.props.post.title);
    return(
      <div style={{borderStyle: "solid", borderWidth:"2px", marginBottom:"2%"}}>
      <li>{this.props.post.title}</li>
      <li style={{position:"relative", left:"10%"}}>{this.props.post.content}</li>
      <li style={{position:"relative", left:"20%"}}>Upvotes: {this.props.post.upvotes}</li>
      <li style={{position:"relative", left:"20%"}}>Downvotes: {this.props.post.downvotes}</li>
      <li style={{position:"relative", left:"20%"}}>Net: {this.props.post.upvotes-this.props.post.downvotes} </li>

      <button onClick={this.handleUpvotes}>Up</button>
      <button onClick={this.handleDownvotes}>Down</button>


      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    updateUpvotes: (id, upvotes)=>dispatch(updateUpvotes(id, upvotes)),
    updateDownvotes: (id, downvotes)=>dispatch(updateDownvotes(id, downvotes))
  }
}

export default connect(null, mapDispatchToProps)(PostItem)
