import React from "react"
import { connect } from 'react-redux'
import {Redirect} from "react-router"
import {fetchCurrentUser} from "../redux/actions/userAction"

const withAuth = (WrappedComponent) => {
  class AuthorizedComponent extends React.Component{
    componentDidMount(){
      if (localStorage.getItem('jwt') && !this.props.loggedIn){
         this.props.fetchCurrentUser()
       }
    }
    render(){
      if (localStorage.getItem('jwt') && this.props.loggedIn){
        return <WrappedComponent />
      }else if (localStorage.getItem('jwt') && this.props.authenticatingUser){
        return <h1>loading!!!!!!!</h1>
      }else{
        return <Redirect to= "/login" />
      }
    }

  }


  const mapStateToProps = (state) => {

    return{
      loggedIn: state.user.loggedIn,
      authenticatingUser: state.user.authenticatingUser
    }
  }

  const mapDispatchToProps = dispatch => {
    return {fetchCurrentUser: ()=>dispatch(fetchCurrentUser())}

  }

  return connect(mapStateToProps, mapDispatchToProps)(AuthorizedComponent)
}

export default withAuth
