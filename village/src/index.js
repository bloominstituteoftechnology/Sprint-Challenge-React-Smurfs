import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter as Router} from 'react-router-dom';

import './index.css';
// import App from './App';
import Home from './Home';

ReactDOM.render(<Router><Home /></Router>, document.getElementById('root'));
