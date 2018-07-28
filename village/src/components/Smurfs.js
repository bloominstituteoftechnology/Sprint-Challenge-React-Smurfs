import React, { Component } from 'react';
import SmurfCard from './SmurfCard';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/smurfenter.png';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

class Smurfs extends Component {
  render() {
    return (
      <StyledDiv>
        <img src={logo} alt="Title" style={{ 'width': '50%' }} />
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
                <Link key={smurf.name} to={`/smurfs/${smurf.id}`} style={{'textDecoration': 'none', 'color': 'white'}}>
                  <SmurfCard
                    name={smurf.name}
                    id={smurf.id}
                    age={smurf.age}
                    height={smurf.height}
                    key={smurf.id}
                  />
                </Link>
            );
          })}
        </ul>
      </StyledDiv>
    );
  }
}

SmurfCard.defaultProps = {
 smurfs: [],
};

export default Smurfs;
