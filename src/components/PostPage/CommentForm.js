import React from "react"
import {connect} from "react-redux"
import {postComment} from "../../redux/actions/createCommentAction"
import {TextField, Button} from '@material-ui/core';


class CommentForm extends React.Component{
  state = {
    content: ""
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.postComment(this.props.postId, this.props.user.id, this.state.content)
    this.setState({content:""})

  }

  render(){

      return(
        <div>
        <h1>Comment Form</h1>
        <form onSubmit={this.handleSubmit}>
        <br/>
        <TextField
                name="content"
                label="Comment"
                value={this.state.content}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                multiline
                rows="5"
              />
      
        <br/>
        <input type="submit" value="Submit"/>
        </form>
        </div>
      )
  }

}

const mapStateToProps = (state) => {
  return{user:state.user.user}
}


const mapDispatchToProps = (dispatch) => {
  return {postComment: (postId, commenterId, content)=>dispatch(postComment(postId, commenterId, content))}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
