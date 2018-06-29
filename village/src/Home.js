import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import App from './App';
import Navigation from './components/Navigation';

const Home = () => {
    return (
        <div className="App">
            <Navigation />
            <Route exact path="/" component={Header} />
            <Route path="/smurfs" component={App} />
        </div>
    );
};

export default Home;