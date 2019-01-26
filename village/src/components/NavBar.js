import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar  extends Component {P

    render() {
        return (
            <div>
                <Link to ="/">
                    <h2>HOME</h2>
                </Link>
                <Link to = "/smurf-form">
                    <h2>ADD SMURF</h2>
                </Link>
            </div>

        )
    }

}

export default NavBar;