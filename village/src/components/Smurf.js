import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FormGroup, Button } from 'reactstrap';
import DeleteSmurf from './DeleteSmurf';
import SmurfCard from './SmurfCard';
import logo from '../images/smurfenter.png';

const ButtonGroup = styled(FormGroup)`
    display:flex;
    justify-content: space-around;
`

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchMovie(id);
  }

  fetchMovie = (id) => {
    console.log(id);
    axios.get('http://localhost:3333/smurfs')
      .then(res => res.data.filter(smurf => smurf.id.toString() === id))
      .then(res => this.setState(...res))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <DIV>
        <img src={logo} alt="Title" style={{ 'width': '50%' }} />
        <SmurfCard {...this.state} />
        <ButtonGroup>
          <Button color="success">Edit Smurf</Button>
          <DeleteSmurf updateState={this.props.updateState} id={this.props.match.params.id} />
        </ButtonGroup>
      </DIV>
    );
  }
};

export default Smurf;

