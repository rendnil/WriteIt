import React from "react"
import { connect } from 'react-redux'
import PostItem from "./PostItem"
import DateBuilder from "../../parsers/DateBuilder"

const PostsList = ({posts}) => {
  console.log("render post list");
  // debugger
  return(
    <div>
    <h2> Posts List </h2>
      <div style={{margin:"auto", maxWidth:"80%"}}>
        {DateBuilder.sortLatest(posts).map((post)=>{
          return <PostItem key={post.id} post={post} />
        })}
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {posts:state.posts}
}

export default connect(mapStateToProps)(PostsList)
