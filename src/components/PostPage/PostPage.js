import React from "react"
import withAuth from "../../hocs/withAuth"
import PostContent from "./PostContent"
import CommentsContainer from "./CommentsContainer"


const PostPage = (props) => {
  return(
    <div>
    <h1> Post Page </h1>
    <PostContent postId = {props.match.params.id}/>
    <CommentsContainer postId = {props.match.params.id}/>
    </div>
  )
}


export default PostPage
