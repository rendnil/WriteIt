import React from "react"
import { connect } from 'react-redux'
import {updateUpvotes} from "../../redux/actions/updateUpvotesAction"

class PostItem extends React.Component{
  handleUpvotes = () => {

  }


  render(){
    return(
      <div style={{borderStyle: "solid", borderWidth:"2px", marginBottom:"2%"}}>
      <li>{this.props.post.title}</li>
      <li style={{position:"relative", left:"10%"}}>{this.props.post.content}</li>
      <li style={{position:"relative", left:"20%"}}>Upvotes: {this.props.post.upvotes}</li>
      <li style={{position:"relative", left:"20%"}}>Downvotes: {this.props.post.downvotes}</li>
      <li style={{position:"relative", left:"20%"}}>Net: {this.props.post.upvotes+this.props.post.downvotes} </li>

      <button onClick={this.handleUpvotes}>Up</button>
      <button>Down</button>


      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{updateUpvotes: ()=>dispatch(updateUpvotes)}
}

export default connect(null, mapDispatchToProps)(PostItem)
