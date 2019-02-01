import React from "react"
import CommentsList from "./CommentsList"
import CommentForm from "./CommentForm"

const CommentsContainer = (props) => {
  return(
    <div>
    <h1>CommentsContainer</h1>
    <CommentForm postId={props.postId}/>
    <CommentsList postId = {props.postId} />
    </div>
  )
}

export default CommentsContainer
