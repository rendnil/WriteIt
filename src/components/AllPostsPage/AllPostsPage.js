import React from "react"
import withAuth from "../../hocs/withAuth"
import PostsList from "./PostsList"
import Button from '@material-ui/core/Button';

const AllPostsPage = () => {
  return (
    <div>

      <h1>All Posts</h1>
      <PostsList />

    </div>
  )
}


export default withAuth(AllPostsPage)
