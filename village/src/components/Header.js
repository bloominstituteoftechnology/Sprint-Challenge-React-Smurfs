import React from 'react';
import {Route, Link} from 'react-router-dom';
import App from '../App';

const Header = (props) => {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>
        <Link style={{textDecoration: 'none', color: 'blue'}} to="/village">The Village</Link>
      </h1>
      <Route exact path="/village" component={App} />
      <button onClick={() => props.history.goForward()}>Forward</button>
    </div>
  )
}
 
export default Header;