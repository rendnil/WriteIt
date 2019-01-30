import React from "react"
import {connect} from "react-redux"
import {fetchCommentsAction} from "../../redux/actions/fetchCommentsAction"
import CommentItem from "./CommentItem"

class CommentsList extends React.Component{
  componentDidMount(){
    console.log("COMMENT LIST DID MOUNT", "POST ID", this.props.postId);
    this.props.fetchComments(this.props.postId)
  }

  render(){
    console.log("COMMENTS LIST CALLED");
    console.log("COMMENTS STATE", this.props);
    console.log(typeof(this.props.postId));
    return !this.props.comments.length? null:
    (
      <div>
      <h1>Comments List</h1>
      {
        this.props.comments.map((comment) => {
          return <CommentItem key={comment.id} comment={comment}/>
        })
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    comments:state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchComments: (postId) => dispatch(fetchCommentsAction(postId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)
