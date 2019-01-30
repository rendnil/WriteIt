import React from "react"


const CommentItem = (props) => {
  return(
    <div>
      Comment: {props.comment.content}
    </div>
  )
}


export default CommentItem
