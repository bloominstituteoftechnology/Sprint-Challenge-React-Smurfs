import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="WelcomePage">
                <Link to="/">                    
                    <img src="https://vignette.wikia.nocookie.net/roblox/images/7/72/Smurfs_The_Lost_Village_Logo.png/revision/latest?cb=20180123225720" className="SmurfTitle"/>
                    <div className="WelcomePage__enterButton">
                        <Link to="/village"><button className="col-2 Button">Enter Village</button></Link>
                    </div>
                </Link>
            </div>
        )
    }
}

export default WelcomePage;