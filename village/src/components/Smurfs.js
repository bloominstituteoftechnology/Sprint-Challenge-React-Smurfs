import React, { Component } from 'react';

import Smurf from './Smurf';

import styled from 'styled-components';

const SmurfsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const SmurfContainer = styled.div`
  flex: 0 1 20%;
  min-width: 200px;
  height: 200px;
  background-color: #f6f5f7;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23070607' fill-opacity='0.05' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  border: 0;
  border-radius: 3px;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  margin: 10px;
  padding: 5px;
`;

class Smurfs extends Component {
  render() {
    return (
      <div>        
        <h1>Smurf Village</h1>
          <SmurfsContainer>
              {this.props.smurfs.map(smurf => {
                return (
                  <SmurfContainer>
                    <Smurf
                      name={smurf.name}
                      id={smurf.id}
                      age={smurf.age}
                      height={smurf.height}
                      key={smurf.id}
                    />
                    <button onClick={() => this.props.delete(smurf.id)}>☠️ Smurf</button>
                  </SmurfContainer>
                );
              })}
          </SmurfsContainer>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
