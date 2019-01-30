import React from "react"
import {connect} from "react-redux"
import {selectPost} from "../../redux/actions/selectPostAction"
import CommentsList from "./CommentsList"


class PostContent extends React.Component{
  componentDidMount(){
    console.log("GOT CALLED", this.props.match.params.id);
    this.props.selectPost(this.props.match.params.id)
  }

  render(){
    console.log("CONTENT PROPS", this.props.match);
    console.log("SELECTED POST", this.props.post);
    if (this.props.post){

      return(
        <div>
        PostContent
        <h4>{this.props.post.id}</h4>
        <h4>Title: {this.props.post.title}</h4>
        <p>Content: {this.props.post.content}</p>
        <CommentsList postId = {this.props.match.params.id} />
        </div>
      )
    }else{
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return{
    post: state.posts.selectedPost
  }
}

const mapDispatchToProps = dispatch => {
  return{
    selectPost: (postId)=>dispatch(selectPost(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContent)
