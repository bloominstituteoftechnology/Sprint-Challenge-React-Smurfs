import React, { Component } from 'react';

import Smurf from './Smurf';

import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    // console.log(this.props)
    const smurfs = this.props.fetchSmurfs();
    // console.log('Fetching Smurfs',smurfs)
    this.setState({
      smurfs
    })
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.props.smurfs.map((smurf, i) => {
            return <Smurf id={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} key={i} />;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSmurfs: () => dispatch(getSmurfs())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Smurfs);
// export default Smurfs;