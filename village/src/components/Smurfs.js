import React, { Component } from 'react';
import styled from 'styled-components';

import SmurfCard from './SmurfCard';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <List>
          {this.props.smurfs.map((smurf) => {
            return (
              <SmurfCard
                {...this.props}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              />
            );
          })}
        </List>
      </div>
    );
  }
}

SmurfCard.defaultProps = {
  smurfs: [],
};

export default Smurfs;

const List = styled.ul`
  display: flex;
`;
