import React from "react"
import {NavLink} from 'react-router-dom';
import {AppBar, Button, Toolbar, Typography} from '@material-ui/core';
import withAuth from "../hocs/withAuth"

const NavBar = () => {
  return(
    <div>
    <AppBar  position="static">
    <Toolbar>
    <Typography style={{marginRight:"5%"}} variant = "h4"color="inherit">WriteIt</Typography>

    <Button color="inherit">
      <NavLink style={{textDecoration:"none", color:"inherit"}}to = "/">Posts</NavLink>
    </Button>
    <Button color="inherit">
      <NavLink style={{textDecoration:"none", color:"inherit"}}to = "/new">Create Post</NavLink>
    </Button>
    </Toolbar>
    </AppBar>

    </div>
  )
}

export default withAuth(NavBar)
