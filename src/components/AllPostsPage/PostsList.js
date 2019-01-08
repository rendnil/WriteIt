import React from "react"
import { connect } from 'react-redux'
import PostItem from "./PostItem"

const PostsList = ({posts}) => {
  return(
    <div>
    <h2> Posts List </h2>
    {posts.map((post)=>{
      return <PostItem key={post.id} post={post} />
    })}
    </div>
  )
}


const mapStateToProps = (state) => {
  return {posts:state.posts}
}

export default connect(mapStateToProps)(PostsList)
