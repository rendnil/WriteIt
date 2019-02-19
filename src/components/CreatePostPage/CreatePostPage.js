import React from "react"
import PostForm from "./PostForm"
import withAuth from "../../hocs/withAuth"

const CreatePostPage = () => {
  return(
    <div>
      <PostForm />

    </div>
  )
}


export default withAuth(CreatePostPage)
