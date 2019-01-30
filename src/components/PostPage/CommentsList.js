import React from "react"
import {connect} from "react-redux"
import {fetchCommentsAction} from "../../redux/actions/fetchCommentsAction"

class CommentsList extends React.Component{
  componentDidMount(){
    this.props.fetchComments(this.props.postId)
  }

  render(){
    console.log("COMMENTS STATE", this.props);
    return(
      <div>
      <h1>Comments List</h1>
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
