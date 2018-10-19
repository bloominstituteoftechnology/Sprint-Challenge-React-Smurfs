import React from 'react';
import {Route, Link, NavLink} from 'react-router-dom';
import SmurfForm from './SmurfForm';


const Nav = props => {
   <div>
    <nav>
        <NavLink to ='/'>Home</NavLink>
        <NavLink to= '/addSmurf'>Add Smurf</NavLink>
    </nav>

    <Route 
        exact path='/' 
        render=
            {props =>
                <Smurfs {...props}smurfs={props.smurfs} />
            }
     />

      <Route 
        path='/addSmurf' 
        render=
            {props =>
                <SmurfForm {...props}addNewSmurf={props.addNewSmurf} />
            }
     />
   </div>

        
}
export default Nav;