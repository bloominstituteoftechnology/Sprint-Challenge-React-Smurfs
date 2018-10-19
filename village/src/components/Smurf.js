import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios';

import { Container } from '../Style';

const StyledSmurf = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px;
  background: #fff;
  margin: 20px 0;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`;

const SmurfInfo = styled.div`
  text-align: left;
`;

const SmurfActions = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  i {
    cursor: pointer;
  };
  .fa-trash {
    color: rgba(255, 0, 0, 0.5);
  };
  .fa-edit {
    color: rgba(0, 0, 255, 0.5);
  } ;
} 
`;

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  editSmurf = () => {
    this.props.history.push(`/smurf/${this.props.smurf.id}/edit`)
  }

  deleteSmurf = (id) => {
    axios.delete(`${this.props.url}/smurfs/${id}`)
      .then(({data}) => { 
        this.props.updateSmurfs(data);
        this.props.history.push('/');
      })
      .catch(err => console.error(err));
  }

  render() {
    if(!this.props.smurf) return <h2>Loading... </h2>
    const {name, height, age, id} = this.props.smurf;
    return (
      <Container>
        <StyledSmurf>
          <SmurfInfo>
            <div>
                <span>{name}</span>
            </div>
            <div>
                <span>{age} smurf years old</span>
            </div>
            <div>
                <span>{height} tall</span>
            </div>
          </SmurfInfo>
          <SmurfActions>
              <i className="fas fa-edit" onClick={() => this.editSmurf(id, {name: name, age: age, height: height})}/>
              <i className="fas fa-trash" onClick={() => this.deleteSmurf(id)}/>
          </SmurfActions>
        </StyledSmurf>
      </Container>
    );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

