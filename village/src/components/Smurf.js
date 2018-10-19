import React from 'react';
import { Link } from 'react-router-dom';
import { TweenMax } from 'gsap/all';

class Smurf extends React.Component {
  constructor() {
    super();
    this.smurfs = [];
  }
  delete = e => {
    e.preventDefault();
    this.props.delete(this.props.id);
  };
  componentDidMount() {
    TweenMax.from(this.smurfs, 1, { x: 200 });
  }

  render() {
    const props = this.props;
    return (
      <Link to={`/edit/${props.id}`}>
        <div className="Smurf" ref={div => (this.smurfs[`${props.id}`] = div)}>
          <h3>{props.name}</h3>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>
          <button onClick={this.delete}>Delete</button>
        </div>
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
