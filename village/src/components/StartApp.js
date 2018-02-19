import React from 'react';
import styled from 'styled-components';

class StartApp extends React.Component {

    handleOnClick = () => {
        this.props.startApp(true);
    };

    render() {
        return (
            <StartAppContainer>
                <h1>Welcome To Smurf Village</h1>
                <br/> <br/>
                <h2>You Don't have Smurfs To Show</h2>
                <button className="btn btn-primary btn-lg" onClick={ () => {this.handleOnClick()} }> Start Adding Smurfs </button>
            </StartAppContainer>
        );
    }

}

const StartAppContainer = styled.div`
    border:1px solid grey;
    text-align: center;
    margin:0px auto;
    margin-top: 15%;
    padding: 20px
`;

export default StartApp;