import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  cullSmurf = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState({
          smurfs: response.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  editSmurf = (event, id) => {
    event.preventDefault();
    this.setState({
      edit: id
    });
  };

  saveSmurf = (event, id, stats) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3333/smurfs/${id}`, stats)
      .then(response => {
        this.setState({
          smurfs: response.data,
          edit: null
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({
          smurfs: response.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
  // componentDidUpdate() {
  //   axios
  //     .get('http://localhost:3333/smurfs')
  //     .then(response => {
  //       this.setState(() => ({
  //         smurfs: response.data
  //       }));
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.map(smurf => {
            return (
              // I tried to troubleshoot this, but my React Inspector was constantly refreshing

              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                cullSmurf={this.cullSmurf}
                editSmurf={this.editSmurf}
                saveSmurf={this.saveSmurf}
                edit={this.state.edit}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
