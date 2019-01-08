import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        hey

      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {state:state}
}

export default connect(mapStateToProps)(App)
