import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Smurf from './Smurf';

const Section = styled.section`
display: flex;
flex-flow: row wrap;
justify-content: space-around;
align-content: center;
width: 100%;
padding: 1%;
`


const theme = {
  main: '120px'
}

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
                theme={theme}
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
