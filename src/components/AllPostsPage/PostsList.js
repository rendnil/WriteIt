import React from "react"
import { connect } from 'react-redux'
import PostItem from "./PostItem"
import DateBuilder from "../../parsers/DateBuilder"
import {List,ListItem} from '@material-ui/core';

const PostsList = ({posts, user}) => {
  console.log("render post list");
  // debugger
  return(
    <div>
    <h2> Posts List </h2>
      <div style={{margin:"auto", maxWidth:"80%"}}>
        <List>
        {DateBuilder.sortLatest(posts).map((post)=>{
          return <PostItem key={post.id} user={user} post={post} />
        })}
        </List>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    posts:state.posts.posts,
    user: state.user.user
  }
}

export default connect(mapStateToProps)(PostsList)
