import React from 'react';
import EditForm from './EditSmurf';

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: props.smurf,
      showEdit: false
    }
  }

  toggleEdit = () => {
    this.setState({showEdit: !this.state.showEdit});
  }

  render() {
  return (
    <div className="Smurf">
      <h3>{this.state.smurf.name}</h3>
      <strong>{this.state.smurf.height} tall</strong>
      <p>{this.state.smurf.age} smurf years old</p>
      <button onClick={this.toggleEdit}>Edit</button>
      {this.state.showEdit ? (
        <EditForm 
        id={this.state.smurf.id}
        handleData={this.props.handleData}/>
      ) : null}
      <button onClick={(e) => this.props.deleteSmurf(this.state.smurf.id)}>Delete</button>
    </div>
  );
};
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

