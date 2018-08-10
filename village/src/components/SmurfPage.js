import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SmurfPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdate: false,
      name: '',
      height: '',
      age: ''
    }
  }

  deleteSmurf = (id, props) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(function (response) {
        props.didMount();
      })
  }

  updateSmurf = (id, props) => {
    axios.put(`http://localhost:3333/smurfs/${id}`, {
      name: this.state.name,
      height: this.state.height,
      age: this.state.age
    })
    .then(function (response) {
      props.didMount();
    })
  }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
      let realIndex = this.props.smurfs.findIndex(smurf => smurf.id === Number(this.props.match.params.id));
      console.log(realIndex);
    if(this.props.smurfs.length > 0) {
  return (
    <div className="Smurf">
      <Link to={`/smurf/${this.props.id}`}>
      <h3>{this.props.smurfs[realIndex].name}</h3>
      <strong>{this.props.smurfs[realIndex].height} cm tall</strong>
      <p>{this.props.smurfs[realIndex].age} smurf years old</p>
      </Link>
      <button onClick={props => this.setState({showUpdate: !this.state.showUpdate})}>Update Smurf</button><button onClick={() => this.deleteSmurf(this.props.id, this.props)}>Delete Smurf</button>

      <div className={"update " + (this.state.showUpdate ? 'update-show' : 'update-hidden')}>
        <form onSubmit={props => this.updateSmurf(this.props.id, this.props)}>  
          <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleInputChange} />
          <input type="number" placeholder="Height" name="height" value={this.state.height} onChange={this.handleInputChange} />
          <input type="number" placeholder="Age" name="age" value={this.state.age} onChange={this.handleInputChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <br/>
      <Link to="/smurfs">Home</Link>
      <hr/>
    </div>
    
    );
    } else {
        return (
            <div>Loading...</div>
        )
    }
}
};

SmurfPage.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default SmurfPage;

