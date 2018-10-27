import React from 'react';


export default class Smurf extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      smurf: null
    }
  }
  //for some reason this doesn't work...
  // componentDidMount(){
  //   const id = this.props.match.params.id
  //   console.log(id)
  // }
  render(){
  return (
    <div className="Smurf">
      <h3>{this.props.name}</h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
      <button onClick={() => this.props.delete(this.props.id)}> Delete Smurf</button>
      <button onClick={() => this.props.update(this.props.id)}> Update Smurf</button>
    </div>
  );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

