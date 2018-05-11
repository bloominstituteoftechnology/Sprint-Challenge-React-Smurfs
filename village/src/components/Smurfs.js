import React, { Component } from 'react';
import axios from "axios";
import Smurf from './Smurf';
import UpDateSmurfForm from "./UpDateSmurfForm";

class Smurfs extends Component {
  constructor(props) {
    super(props);
  }

  handleDelete(id) {
    axios.delete("http://localhost:3333/smurfs/" + id)
      .then(response => this.setState({smurfs: response.data}))
      .catch(err => console.log(err));
  }

  handleEdit = (id) => {
    let upDatedSmurf = {
      updateName: this.props.updateName,
      updateAge: this.props.updateAge,
      updateHeight: this.props.updateHeight
    };
    axios.put("http://localhost:3333/smurfs/" + id, upDatedSmurf )
    .then(res => {
      const smurfs= res.data;
      this.setState({smurfs});
    })
    .catch(err => console.log(err));
  }

  render() {
    console.log(this.props.smurfs);
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div key={smurf.id}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}

                  delete={this.handleDelete.bind(this)}
                />
                <UpDateSmurfForm
                  updateName={this.props.updateName}
                  updateAge={this.props.updateAge}
                  updateHeight={this.props.updateHeight}
                  id={smurf.id}
                  edit={this.handleEdit.bind(this)}
                />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
