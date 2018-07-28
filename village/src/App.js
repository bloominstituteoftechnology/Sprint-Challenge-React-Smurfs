import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Village from './components/Village';

const App = () => {
    return(
        <Router>
            <div>
                <Route exact path="/" component={Header} />
                <Route path="/smurfs" component={Village} />
            </div>
        </Router>
    )
}

export default App;