import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, deleteSmurf } from '../actions';

class RemoveSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index : this.props.index,
        };
        this.removeSmurf = this.removeSmurf.bind(this);
    }

    removeSmurf() {
        this.props.deleteSmurf([this.state.index]);
    }

    render() {
        return (
            <div>
                <a onClick = {this.removeSmurf} >Remove this smurf #{this.state.index}</a>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
      smurfs: state.smurfs
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return  {
      fetchSmurfs: () => dispatch(getSmurfs())
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(RemoveSmurf);