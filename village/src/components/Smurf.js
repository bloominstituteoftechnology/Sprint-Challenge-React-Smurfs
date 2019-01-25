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
      <div className="smurf-wrapper">
      <Link to={`/smurf/${this.props.id}`} onClick={this.stageSelection}>
      <div className="Smurf">  
      <h3>{this.props.name}</h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
      </div>
      
     </Link>
     <div className="smurf-update-btn-wrapper">
      <button onClick={this.stageUpdate}>Update Info</button>
     </div>
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

