import React from "react"
import { connect } from 'react-redux'
import {updateUpvotes, updateDownvotes} from "../../redux/actions/updateUpvotesAction"
import {Modal, ListItem, ListItemText, Typography} from '@material-ui/core';

class PostItem extends React.Component{
  handleUpvotes = () => {
    this.props.updateUpvotes(this.props.post.id, this.props.post.upvotes+1)
  }
  handleDownvotes = () => {
    this.props.updateDownvotes(this.props.post.id, this.props.post.downvotes+1)
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
    console.log("render post ITEM", this.props.post.title);
    return(
      <div>
        <ListItem divider={true} alignItems="flex-start">
          <ListItemText
            primary = {this.props.post.title}
            secondary = {
              <React.Fragment>
              <Typography variant="subtitle2">Net Votes: {this.props.post.upvotes-this.props.post.downvotes} </Typography>
              <button onClick={this.handleUpvotes}>Up</button>
              <button onClick={this.handleDownvotes}>Down</button>
              </React.Fragment>
            }
            />
        </ListItem>
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
