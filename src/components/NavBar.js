import React from "react"
import {NavLink} from 'react-router-dom';


const NavBar = () => {
  return(
    <div>
    NavBar<br/>
    <NavLink to = "/">Posts</NavLink><br/>
    <NavLink to = "/new">Create New Post</NavLink>

    </div>
  )
}

export default NavBar
