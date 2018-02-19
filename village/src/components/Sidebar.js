import React from 'react';
import Smurfs from './Smurfs';
import styled from 'styled-components';


class Sidebar extends React.Component {
    state = {
        smurfs: this.props.smurfs,
        showUpdateFormObl: this.props.showUpdateFormObl,
    };

    componentWillReceiveProps() {

        this.setState({ smurfs: this.props.smurfs });

    }

    render() {
        return (
            <SideBar>
                <div className="sidebar-title display-4">SMURF VILLAGE</div>
                <Smurfs smurfs={this.state.smurfs} showUpdateFormObl={this.state.showUpdateFormObl} />
            </SideBar>
        );
    }

}

const SideBar = styled.div`
    border:0px solid yellow;
    width: 300px;
    height:500px;
    max-width: 300px;
    background-color:#001529;
    color:#788195;
    
        
        .sidebar-title {
            border:0px solid black;
            height:108px;
            background-color:#2d3446;
            color: white;
            text-align:center;
            padding-top:12%;
            font-size: 2em;
        }
    
`;


export default Sidebar;
