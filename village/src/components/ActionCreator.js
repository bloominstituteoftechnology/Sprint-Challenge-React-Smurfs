import React from 'react';
import axios from "axios/index";

class actionCreator extends React.Component {

    state = {
        smurfs: [],
    };

    componentDidMount(){

        this.testFunc();

    }
    testFunc = () => {
        console.log('this is the testFunc');
        axios
            .get('http://localhost:3333/smurfs')
            .then(response => {
                this.setState({ smurfs: response.data});
            })
            .catch(error => {
                console.log('error');
            });
    };


}

export default actionCreator;