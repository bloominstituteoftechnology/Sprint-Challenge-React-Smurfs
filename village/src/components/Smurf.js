import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SmurfForm from './SmurfForm';

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.editSmurf = this.editSmurf.bind(this);
  }

  delete() {
    const localDelete = this.props.makeDelete(this.props.id);
    localDelete();
  }

  editSmurf(smurf) {
    const localEditSmurf = this.props.makeEdit(this.props.id, smurf);
    const context = this;

    localEditSmurf()
      .then((response) => {
        context.props.history.push('/village');
      })
      .catch((response) => {
        console.log('Failed ', response.data);
      });
  }

  render() {
    return (
      <div>
        <Route
          exact
          path={this.props.match.url}
          render={() => (
            <div className="Smurf">
              <h3>{this.props.name}</h3>
              <strong>{this.props.height} tall</strong>
              <p>{this.props.age} smurf years old</p>
              <button onClick={this.delete}>Delete</button>
              <Link to={`${this.props.match.url}/edit/${this.props.id}`}>Edit</Link>
            </div>
          )}
        />
        <Route
          exact
          path={`${this.props.match.url}/edit/${this.props.id}`}
          render={routeProps => (
            <SmurfForm {...routeProps} id={this.props.id} name={this.props.name} age={this.props.age} height={this.props.height} saveSmurf={this.editSmurf} />
          )}
        />
      </div>
    );
  }
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
};

export default Smurf;
