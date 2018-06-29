import React from 'react';
import SmurfForm from './SmurfForm';
import axios from 'axios';
import SmurfCard from './SmurfCard';

class Smurf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      smurf: null
    }
  }

  componentDidMount() {
    if (this.props.match) {
      this.fetchSmurf(this.props.match.params.id);
    }
  }

  fetchSmurf = id => {
    axios
      .get(`http://localhost:3333/smurfs/${id}`)
      .then(response => this.setState({ smurf: response.data, }))
      .catch(err => console.log(err));
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.props.handleSetData(response.data)
        this.props.history.push('/smurfs');
      })
      .catch(err => console.log(err));
  }

  setEdit = edit => this.setState({ edit });

  render() {
    return (

      <div className="Smurf">

        <SmurfCard smurf={this.state.smurf} />

        <button onClick={() => this.deleteSmurf(this.state.smurf.id)} >Delete</button>
        <button onClick={() => this.setState({ edit: !this.state.edit })} >Edit</button>
        <button onClick={() => this.props.history.push('/smurfs')}>Back</button>

        {this.state.edit ? <SmurfForm {...this.props}
          name={this.state.smurf.name}
          age={this.state.smurf.age}
          height={this.state.smurf.height}
          id={this.state.smurf.id}
          handleSetData={this.props.handleSetData}
          setEdit={this.setEdit} /> : null}

      </div>

    );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

