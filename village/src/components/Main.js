import React from 'react'
import { Route, Switch} from 'react-router-dom';
import Smurfs from './Smurfs';
import About from './About';


const Main = () => {

    return (
      <div className="container">
        <switch>
            <Route exact path="/" component={Smurfs} />
            <Route exact path="/about" component={About} />
        </switch>
      </div>
    )
  } 

export default Main;