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
                <div className="sidebar-title">SideBar Title</div>
                <Smurfs smurfs={this.state.smurfs} showUpdateFormObl={this.state.showUpdateFormObl} />
            </SideBar>
        );
    }

}

const SideBar = styled.div`
    border:1px dotted blue;
    position:relative;
    width: 200px;
    max-width: 500px;
    left:0px;
    height: 500px;
    top:0px;
        
        
        .sidebar-title {
            
            border:1px solid black;
            height:50px;
            
        }
    
`;


export default Sidebar;
