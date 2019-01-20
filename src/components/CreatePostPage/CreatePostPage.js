import React from "react"
import PostForm from "./PostForm"
import withAuth from "../../hocs/withAuth"

const CreatePostPage = () => {
  return(
    <div>
      <h1>Create Post</h1>
      <PostForm />

    </div>
  )
}


export default withAuth(CreatePostPage)
