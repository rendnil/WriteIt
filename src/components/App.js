import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux'
import NavBar from "./NavBar"
import AllPostsPage from "./AllPostsPage/AllPostsPage"
import CreatePostPage from "./CreatePostPage/CreatePostPage"

class App extends Component {
  render() {
    console.log(this.props.state);
    return (
      <React.Fragment>
        <Router>
          <React.Fragment >
            <NavBar />
            <Route exact path = "/" render = {()=> <AllPostsPage/>}/>
            <Route exact path = "/new" render = {()=> <CreatePostPage/>}/>
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
