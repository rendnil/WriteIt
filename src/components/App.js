import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux'
import NavBar from "./NavBar"
import AllPostsPage from "./AllPostsPage/AllPostsPage"
import CreatePostPage from "./CreatePostPage/CreatePostPage"
import WelcomePage from "./WelcomePage/WelcomePage"
import PostContent from "./PostPage/PostContent"

class App extends Component {
  render() {
    console.log(this.props.state);
    return (
      <React.Fragment>
        <Router>
          <React.Fragment >
            <NavBar />
            <Route exact path = "/login" render = {() => <WelcomePage/>}/>
            <Route exact path = "/" render = {()=> <AllPostsPage/>}/>
            <Route exact path = "/new" render = {()=> <CreatePostPage/>}/>
            <Route exact path = "/post" render = {()=> <PostContent/>}/>
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {state:state.posts}
// }

export default App
