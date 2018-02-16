import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { removeSmurf } from '../actions';

class Smurf extends Component {
  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    this.props.removeSmurf(this.props.id);
  }

  render() {
    console.log(this.props.id)
      return (
        <li>
          <p>{`Name: ${this.props.name}`}</p>
          <p>{`Height: $this.props.height`}</p>
          <p>{`Age: ${this.props.age}`}</p>
          <button onClick={this.handleDelete}>Delete</button>
        </li>
      );
  }
}

const mapDispatchToProps = (dispatch) => {
//  return bindActionCreators({ removeSmurf }, dispatch);
};

export default connect(null, mapDispatchToProps)(Smurf);
// import React from 'react';

// const Smurf = (props) => {
//   return (
//     <div className="Smurf">
//       <h3>{props.name}</h3>
//       <strong>{props.height} tall</strong>
//       <p>{props.age} old</p>
//     </div>
//   );
// }

// export default Smurf;