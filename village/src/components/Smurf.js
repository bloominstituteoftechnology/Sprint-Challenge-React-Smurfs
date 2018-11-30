import React from 'react';

class Smurf extends React.Component {
  constructor(props){
    super(props);
  }

  stageUpdate = () => {
    this.props.stageUpdate(this.props.smurf);
    this.props.history.push('/smurf-form');
  }

  render() {
    return (
      <div className="Smurf">
      <h3>{this.props.name}</h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
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

