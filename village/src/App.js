import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Smurf from './components/Smurf';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
  }

  componentWillMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleSmurfSubmit = e => {
    e.preventDefault();

    const newSmurf = { name: this.state.name,
                       age: this.state.age,
                       height: this.state.height };

    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
        this.setState({
          smurfs: response.data,
          name: '',
          age: '',
          height: ''
        });
      })
      .catch(error => {
        console.log(error);
      })

    this.props.history.push("/");
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCancel = e => {
    e.preventDefault();

    this.setState({
      name: '',
      age: '',
      height: ''
    });

    this.props.history.push("/");
  }

  handleUpdateSmurfs = (data, deletedSmurfId) => {
    const smurfs = this.state.smurfs.filter(smurf => smurf.id !== deletedSmurfId);
    this.setState({ smurfs });
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="container">
        <Header />

        <Route exact path="/" render={ props =>
            <SmurfList smurfs={this.state.smurfs} />
          }
        />

        <Switch>

          <Route path="/smurfs/add" render={ props =>
              <Form name={this.state.name}
                    age={this.state.age}
                    height={this.state.height}
                    handleInputChange={this.handleInputChange}
                    handleCancel={this.handleCancel}
                    handleSmurfSubmit={this.handleSmurfSubmit} />
            }
          />

          <Route path="/smurfs/:id" render={ props =>
              <Smurf {...props} handleUpdateSmurfs={this.handleUpdateSmurfs} />
            }
          />

        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
