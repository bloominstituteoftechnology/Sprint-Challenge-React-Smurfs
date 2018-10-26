import React from 'react';
import { Alert } from 'reactstrap';

class SmurfAlert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.onDismiss = this.onDismiss.bind(this);
  }
  onAlert() {
    this.setState({ visible: true })
  }
  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <Alert 
        color="info" 
        isOpen={this.state.visible} 
        toggleOn={this.onAlert}
        toggle={this.onDismiss}>
        You need to smurf all the Smurf data before you can smurf this Smurf into Smurf Village!
      </Alert>
    );
  }
}

export default SmurfAlert;