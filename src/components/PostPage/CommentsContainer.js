import React from "react"
import CommentsList from "./CommentsList"


const CommentsContainer = (props) => {
  return(
    <div>
    <h1>CommentsContainer</h1>
    <CommentsList postId = {props.postId} />
    </div>
  )
}

export default CommentsContainer
