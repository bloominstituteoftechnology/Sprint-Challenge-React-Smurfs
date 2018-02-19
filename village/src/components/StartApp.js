import React from 'react';

class StartApp extends React.Component {

    handleOnClick = () => {
        this.props.startApp(true);
    };

    render() {
        return (
            <div>
                <h1>Welcome To Smurf Village</h1>
                <br/> <br/>
                <h2>You Don't have Smurfs To Show</h2>
                <button onClick={ () => {this.handleOnClick()} }> Start Adding Smurfs </button>
            </div>
        );
    }

}

export default StartApp;