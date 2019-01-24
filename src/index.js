import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./Root"
import App from './components/App';
import ApiData from './components/ApiData';


ReactDOM.render(
  <Root>
    <React.Fragment>
      <ApiData />
      <App />
    </React.Fragment>
  </Root>, document.getElementById('root'));
