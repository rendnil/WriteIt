import React from "react"
import { connect } from 'react-redux'
import {updateUpvotes} from "../../redux/actions/updateUpvotesAction"
import {Modal, ListItem, ListItemText, Typography, IconButton} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

class PostItem extends React.Component{
  handleUpvotes = () => {
    this.props.updateUpvotes(this.props.user.id, this.props.post.id, true)
  }
  handleDownvotes = () => {
    this.props.updateUpvotes(this.props.user.id, this.props.post.id, false)
  }

  // <ListItem alignItems="flex-start">
  //       <ListItemAvatar>
  //         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  //       </ListItemAvatar>
  //       <ListItemText
  //         primary="Brunch this weekend?"
  //         secondary={
  //           <React.Fragment>
  //             <Typography component="span" className={classes.inline} color="textPrimary">
  //               Ali Connors
  //             </Typography>
  //             {" — I'll be in your neighborhood doing errands this…"}
  //           </React.Fragment>
  //         }
  //       />
  //     </ListItem>


  // <div style={{borderStyle: "solid", borderWidth:"2px", marginBottom:"2%"}}>
  // <h3>{this.props.post.title}</h3>
  // <li style={{position:"relative"}}>{this.props.post.content}</li>
  // <li style={{marginLeft:"20%"}}>Upvotes: {this.props.post.upvotes}</li>
  // <li style={{position:"relative", left:"20%", width:"20%"}}>Downvotes: {this.props.post.downvotes}</li>
  // <li style={{position:"relative", left:"20%"}}>Net: {this.props.post.upvotes-this.props.post.downvotes} </li>
  //
  // <button onClick={this.handleUpvotes}>Up</button>
  // <button onClick={this.handleDownvotes}>Down</button>
  // <Modal open={false}>
  //
  // </Modal>
  render(){
    console.log("post ITEM USer", this.props.user);
    console.log("render post ITEM", this.props.post.title);
    return(
      <div>
        <ListItem divider={true} alignItems="flex-start">

        <div style={{display:"block"}}>
          <IconButton onClick={this.handleUpvotes}><i class="material-icons">thumb_up</i></IconButton>
          <br/>
          <IconButton onClick={this.handleDownvotes}><i class="material-icons">thumb_down</i></IconButton>
        </div>


        <ListItemText
          primary = {this.props.post.title}
          secondary = {
            <React.Fragment>
            <Typography variant="subtitle2">{this.props.post.content} </Typography>
            <Typography variant="subtitle2">Net Votes: {this.props.post.upvotes-this.props.post.downvotes} </Typography>

            </React.Fragment>
          }
          />
        <div style={{margin:"auto"}}>
          <IconButton>
            <NavLink style={{textDecoration:"none", color:"inherit"}} to = {`/posts/${this.props.post.id}`}><i class="material-icons">notes</i></NavLink>
          </IconButton>
        </div>

        </ListItem>
      </div>




    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    updateUpvotes: (userId, postId, vote)=>dispatch(updateUpvotes(userId, postId, vote))

  }
}

export default connect(null, mapDispatchToProps)(PostItem)
