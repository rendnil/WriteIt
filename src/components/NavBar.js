import React from "react"
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux'
import {AppBar, Button, Toolbar, Typography} from '@material-ui/core';
import withAuth from "../hocs/withAuth"
import {signOut} from "../redux/actions/userAction"

const NavBar = (props) => {

  const handleClick = () => {
    props.signOut()
  }

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
    <Button onClick={handleClick} color="inherit">
      Sign Out
    </Button>
    </Toolbar>
    </AppBar>

    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {signOut: ()=>dispatch(signOut())}
}

export default withAuth(connect(null, mapDispatchToProps)(NavBar))
