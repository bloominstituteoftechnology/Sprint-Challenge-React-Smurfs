import React from 'react';
import { Link } from 'react-router-dom';

class Smurf extends React.Component {
  delete = e => {
    e.preventDefault();
    this.props.delete(this.props.id);
  };

  render() {
    const props = this.props;
    return (
      <Link to={`/edit/${props.id}`}>
        <div className="Smurf">
          <h3>{props.name}</h3>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>
        </div>
        <button onClick={this.delete}>Delete</button>
      </Link>
    );
  }
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
