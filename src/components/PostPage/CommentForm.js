import React from "react"
import {connect} from "react-redux"


class CommentForm extends React.Component{
  state = {
    content: ""
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //this.props.createComment(this.props.user.id, this.state.title, this.state.content)


  }

  render(){
      return(
        <div>
        <h1>Comment Form</h1>
        <form onSubmit={this.handleSubmit}>
        <br/>
        <textarea onChange={this.handleChange} value={this.state.content} name="content" id="commentContent" rows="10" cols="20" placeholder="Comment"/>
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


// const mapDispatchToProps = (dispatch) => {
//   return {}
// }

export default connect(mapStateToProps)(CommentForm)
