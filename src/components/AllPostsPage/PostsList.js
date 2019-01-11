import React from "react"
import { connect } from 'react-redux'
import PostItem from "./PostItem"

const PostsList = ({posts}) => {
  console.log("render post list");
  return(
    <div>
    <h2> Posts List </h2>
      <div style={{margin:"auto", maxWidth:"80%"}}>
        {posts.map((post)=>{
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
