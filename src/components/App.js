import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log(this.props.state);
    return (
      <React.Fragment>
        hey

      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {state:state.posts}
}

export default connect(mapStateToProps)(App)
