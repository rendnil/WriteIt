import React from "react"
import { connect } from 'react-redux'

const PostsList = (props) => {
  return(
    <h2> Posts List </h2>
    
  )
}


const mapStateToProps = (state) => {
  return {posts:state.posts}
}

export default connect(mapStateToProps)(PostsList)
