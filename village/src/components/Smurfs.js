import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Smurf from './Smurf';

const SmurfListHeader = styled.h1`
  margin: 20px auto;
  color: #fff;
  font-size: 4rem;
  letter-spacing: 0.25rem;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #F52C07;
  max-width: 40%;
`

const DeleteButton = styled.button`
  background-color: #F52C07;
  color: #fff;
  padding: 3px 5px;
  border: 0;
  border-radius: 5px;
`

class Smurfs extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }


  render(props) {
    return (
      <div className="Smurfs">
        <SmurfListHeader>Smurf Village</SmurfListHeader>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <React.Fragment>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
                <DeleteButton onClick={this.props.deleteSmurf}>Remove this Smurf</DeleteButton>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
