import React from "react"
import { connect } from 'react-redux'
import PostItem from "./PostItem"
import DateBuilder from "../../parsers/DateBuilder"
import {List,ListItem} from '@material-ui/core';

const PostsList = ({posts}) => {
  console.log("render post list");
  // debugger
  return(
    <div>
    <h2> Posts List </h2>
      <div style={{margin:"auto", maxWidth:"80%"}}>
        <List>
        {DateBuilder.sortLatest(posts).map((post)=>{
          return <PostItem key={post.id} post={post} />
        })}
        </List>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {posts:state.posts}
}

export default connect(mapStateToProps)(PostsList)
