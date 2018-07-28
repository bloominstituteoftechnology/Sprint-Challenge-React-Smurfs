import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import App from './App';
import Navigation from './components/Navigation';
// import Smurf from './components/Smurf';

const Home = () => {
    return (
        <div className="App">
            <Navigation />
            <Route exact path="/" component={Header} />
            <Route path="/smurfs" component={App} />
            {/* <Route 
                path="/smurfs/:id"
                render={props => {
                    <Smurf {...props} />
                }}
            /> */}
        </div>
    );
};

export default Home;