import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Sidebar from './components/Sidebar';
import UpdateForm from './components/UpdateForm';
import StartApp from './components/StartApp';
import axios from 'axios';
import styled from 'styled-components';


class App extends Component {
    state = {
        smurfs: [],
        showAddNewForm: false,
        showSideBar: false,
        showUpdateForm: false,
        SmurfToUpdate: [],
    };

    componentDidMount() {
        this.loadSmurf();
    }

    loadSmurf = () => {
        axios
            .get('http://localhost:3333/smurfs')
            .then(response => {
                this.setState({ smurfs: response.data});
                return response.data;
            })
            .then(data => {
                if(data.length > 0){
                    this.setState({ showAddNewForm: true});
                    this.setState({ showSideBar: true});

                }
                return data;
            })
            .catch(error => {
                console.log('error');
            });

    };

    runLoadSmurf = () => {
        this.loadSmurf();
    };

    showSmurfsObl = (dState = true) => {
        this.setState({ showAddNewForm: dState});
    };

    showUpdateFormObl = (dState = true, smurf) => {
        this.setState({ showUpdateForm: dState});
        this.setState({ showAddNewForm: false});

        console.log('this si the smurf we have to re pas to <UpdateForm ', smurf);
        this.setState({ SmurfToUpdate: smurf});
    };

    handleOnCreate = (smurfs) => {
        this.setState({ smurfs: smurfs});
        this.setState({ showAddNewForm: true});
        this.setState({ showSideBar: true});
        // this.loadSmurf();
    };

    render() {
        return (
            <AppContainer className="container">

                <div className="row">

                    {this.state.showSideBar
                        ? <Sidebar smurfs={this.state.smurfs} showUpdateFormObl={this.showUpdateFormObl} />
                        : ''
                    }

                    {(this.state.showAddNewForm)
                        ? <SmurfForm onCreation={this.handleOnCreate}/>
                        : (this.state.showUpdateForm) ? <UpdateForm updateThisSmurf={this.state.SmurfToUpdate} runLoadSmurf={this.runLoadSmurf}/>
                            : <StartApp startApp={this.showSmurfsObl} />
                    }

                </div>


            </AppContainer>
        );
    }
}

const AppContainer = styled.div`
    border:1px solid grey;
    background-color:rgb(235, 235, 235);
    height:500px;

`;

export default App;
