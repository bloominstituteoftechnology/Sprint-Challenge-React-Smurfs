import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Smurf from './Smurf';

const Section = styled.section`
display: flex;
border: 1px solid #FFF4E2;
flex-flow: row wrap;
justify-content: space-around;
align-content: center;
width: 95%;
padding: 1%;
`




class SmurfsList extends Component {
  render() {
    return (
      <Section>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
      </Section>
    );
  }
}


export default SmurfsList;

Smurf.propTypes = {
  smurfs: PropTypes.array,
}
