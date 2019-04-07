import React from "react"
import{NavLink} from "react-router-dom"
  
class NavBar extends React.Component {
    render() {
        return(
            <header>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/smurf-form">ADD SMURF</NavLink>
            </header>
        )
    }
}
export default NavBar