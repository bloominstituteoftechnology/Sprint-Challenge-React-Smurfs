import React from 'react';

class Smurf extends React.Component{
  handleDelete = ()=>{
    this.props.deleteSmurf(this.props.id);
  }
  render(){
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        {this.props.delete ? <div onClick={this.handleDelete}>Delete</div> : null}
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

