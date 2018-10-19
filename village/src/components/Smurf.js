import React from 'react';

class Smurf extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      age: this.props.age,
      height: this.props.height,
    }
  }

  render(){
    return (
      <div className="Smurf">
        <h3>{this.state.name}</h3>
        <strong>{this.state.height} tall</strong>
        <p>{this.state.age} smurf years old</p>
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
