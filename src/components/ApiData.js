import React from "react"
import { connect } from 'react-redux'

import {fetchPosts} from "../redux/actions/fetchPostsAction"

class ApiData extends React.Component{
  componentDidMount(){
    this.props.fetchPosts()
  }

  render(){
    return(
      <React.Fragment/>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {fetchPosts: () => dispatch(fetchPosts()) }
}



export default connect(null,mapDispatchToProps)(ApiData)
