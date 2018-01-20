import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import Smurf from './components/Smurf';

ReactDOM.render(
	<Router>
		<div>
			<Switch>
				<Route exact path="/smurfs/:id/:name/:age/:height" component={Smurf} />
				<Route exact path="/smurfs/:id/:name/:age" component={Smurf} />
				<Route exact path="/smurfs/:id/:name" component={Smurf} />
				<Route exact path="/smurfs/:id" component={Smurf} />
				<Route exact path="/" component={App} />
			</Switch>
		</div>
	</Router>,
	document.getElementById('root')
);
