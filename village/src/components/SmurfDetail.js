import React from 'react';

class SmurfDetail extends React.Component {
  state = {
    smurf: null,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.smurfs.length > 0 && !state.smurf){ 
      const smurf = props.smurfs.find( smurf => (
        smurf.id.toString() === props.match.params.id
      ));

      if (!smurf) {
        window.alert(`Cannot find a smurf with id ${props.match.params.id}`)
        props.history.push('/');
        return null;
      }

      return({ smurf })
    }
    return null;
  }

  render() {
    return (
      <div>
        {
          !this.state.smurf?
          <div>Loading...</div>:
          <div>
            {this.state.smurf.name}
            <button onClick={() => this.props.history.push('/')}>Back</button>
          </div>
        }
      </div>
    );
  }
}
 
export default SmurfDetail;