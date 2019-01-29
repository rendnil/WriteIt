import React from "react"
import {connect} from "react-redux"
import {selectPost} from "../../redux/actions/selectPostAction"


class PostContent extends React.Component{
  componentDidMount(){
    console.log("GOT CALLED", this.props.match.params.id);
    this.props.selectPost(this.props.match.params.id)
  }

  render(){
    console.log("CONTENT PROPS", this.props.match);
    return(
    <div>
    PostContent
    </div>
  )
  }
}

const mapStateToProps = (state) => {
  return{post: state.post}
}

const mapDispatchToProps = dispatch => {
  return{
    selectPost: (postId)=>dispatch(selectPost(postId))
  }
}

export default connect(mapStateToProps)(PostContent)
