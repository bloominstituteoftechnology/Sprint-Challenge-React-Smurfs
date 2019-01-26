import React, {Component} from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    };
  }

  redirectToHome = () => {
    this.props.history.push('/');
  };

  addSmurf = event => {
    event.preventDefault();
    console.log(this.props.location.pathname);
    if (this.props.location.pathname === '/smurf-form') {
      let newSmurf = Object.assign(this.state);
      if (newSmurf.name && newSmurf.age && newSmurf.height !== '') {
        newSmurf.age = Number(newSmurf.age);
        newSmurf.id = this.props.newId;
        axios
          .post('http://www.localhost:3333/smurfs', newSmurf)
          .then(res => {
            console.log(res);
            this.props.updateState(res);
            this.redirectToHome();
          })
          .catch(err => console.log(err));
      }
    } else {
      event.preventDefault();
      console.log(this.props.match.params.id);
      let newSmurf = Object.assign(this.state);
      if (newSmurf.name && newSmurf.age && newSmurf.height !== '') {
        newSmurf.age = Number(newSmurf.age);
        axios
          .put(
            `http://www.localhost:3333/smurfs/${this.props.match.params.id}`,
            {
              name: this.state.name,
              age: this.state.age,
              email: this.state.email,
            },
          )
          .then(res => {
            console.log(res);
            this.props.updateState(res);
            this.redirectToHome();
          })
          .catch(err => console.log(err));
      }
    }

    this.setState({
      name: '',
      age: '',
      height: '',
    });
  };

  handleInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
