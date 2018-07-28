import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

import './index.css';
import App from './App';

ReactDOM.render(
<Router>
  <Header />
</Router>, document.getElementById('root'));
