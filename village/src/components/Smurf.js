import React from 'react';

class Smurf extends React.Component {
  state = {
      toggled: false
  }

  flip = () => {
    this.setState({toggled: !this.state.toggled})
  }

 
render(){
  return (
  <div className='smurf-container' onClick={this.flip}>
    <div className={`Smurf ${this.state.toggled ? 'flip' : ''}`}>
      <div className={`front`}>
        <h1>{this.props.name}</h1>
      </div>
      <div className={`back`}>
      <h3>{this.props.name}</h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
      </div>
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

