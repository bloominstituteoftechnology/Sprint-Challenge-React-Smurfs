import React, { Component } from 'react';
import styled from 'styled-components';
import Smurf from './Smurf';
import axios from 'axios';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const SmurfsDiv = styled.div `
background-image: url("http://features.cgsociety.org/newgallerycrits/g30/364330/364330_1362479295_large.jpg");
background-size: cover;
width: 80%;
color: white;
margin: 0 auto;
padding: 20px 0 40px;
`;

const StyledUL = styled.ul `
  background: white;
  color: black;
  opacity: .6;
  width: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
`;

class Smurfs extends Component {

  deleteHandler = (e) => {

  }

  render() {
    return (
      <SmurfsDiv>
        <h1>Smurf Village Members</h1>
        <StyledUL>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              <Link to={`/smurfs/${smurf.id}`}>
                <Button onClick={() => axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
                .then(() => {
                  this.props.fetchSmurfs();
                })}>Delete Me?</Button>
              </Link>
              </div>
            );
          })}
        </StyledUL>
      </SmurfsDiv>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
