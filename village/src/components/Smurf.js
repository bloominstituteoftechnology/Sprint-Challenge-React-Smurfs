import React from 'react';
import SmurfForm from './SmurfForm';

class Smurf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    }
  }

  setEdit = edit => this.setState({ edit });

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        <button onClick={() => this.props.deleteSmurf(this.props.id)} >Delete</button>
        <button onClick={() => this.setState({ edit: !this.state.edit })} >Edit</button>
        {this.state.edit ? <SmurfForm {...this.props} name={this.props.name} handleSetData={this.props.handleSetData} setEdit={this.setEdit} /> : null}
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

