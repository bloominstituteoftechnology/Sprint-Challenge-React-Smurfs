import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

//import router and wihtrouter to pass props
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

let AppWithRouter = withRouter(App)

//change the default to a function with reactDOM
// ReactDOM.render(<App />, document.getElementById('root'));
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <AppWithRouter />
  </Router>,
  rootElement
);