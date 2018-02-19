import React from 'react';
import styled from 'styled-components';

class Smurf extends React.Component {
    state = {
        showUpdateFormObl: this.props.showUpdateFormObl,
    };

    handleOnClick = (smurf) => {
        this.props.showUpdateFormObl(true, smurf);
    };

    render() {
        return (
            <ItemBox>
                <h3><a onClick={() => {this.handleOnClick(this.props)}}>{this.props.name}</a></h3>
            </ItemBox>
        );
    }

}

const ItemBox = styled.div`
    border:0px solid white;
    margin:0px auto;
    padding:10px;
    position:relative;
    left:-20px;
    
    &:hover {
        color:white;
    }
`;

export default Smurf;