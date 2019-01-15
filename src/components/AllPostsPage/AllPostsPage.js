import React from "react"
import PostsList from "./PostsList"
import Button from '@material-ui/core/Button';

const AllPostsPage = () => {
  return (
    <div>
      <Button variant="contained" color="warninga">hey</Button>
      <h1>All Posts</h1>
      <PostsList />

    </div>
  )
}


export default AllPostsPage
