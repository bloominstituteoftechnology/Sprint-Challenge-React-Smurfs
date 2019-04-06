import React from 'react';
import EditSmurf from './EditSmurf'

class Smurf extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      edit: false
    }
  }

  edit = (edit) => {
    let id = this.props.id
    this.props.edit(id, edit)
    this.setState({edit: false});
  }

  clickHandler = () => {
    if (this.state.edit) {
      this.setState({edit: false})
    } else{
      this.setState({edit: true})
    }
  }

  Form = () => {
    if (this.state.edit) {
      return <EditSmurf edit={this.edit}/>
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        <div>
          <span onClick={ () => this.props.deleteSmurf(this.props.id)}>Delete</span>
          <span onClick={ () => this.clickHandler()} >Edit</span>
        </div>
        <this.Form />
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

