import React from 'react';
import { Link } from 'react-router-dom';

class Smurf extends React.Component {
  constructor(props){
    super(props);
  }

  stageUpdate = () => {
    this.props.stageUpdate(this.props.smurf);
    this.props.history.push('/smurf-form');
  }

  stageSelection = () => {
    this.props.stageSelection(this.props.smurf);
  }

  render() {
    return (
      
      <div className="Smurf">
      <Link to={`/smurf/${this.props.id}`} onClick={this.stageSelection}>
      <h3>{this.props.name}</h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
      </Link>
      <button onClick={this.stageUpdate}>Update Info</button>
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

