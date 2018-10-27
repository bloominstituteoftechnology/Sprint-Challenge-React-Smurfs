import React from 'react';
import { Alert } from 'reactstrap';

export class SmurfAlert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }
 

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    
    return (
      
      <Alert 
        color="info" 
        isOpen={this.state.visible} 
        toggle={this.onDismiss}>
        You need to smurf all the Smurf data before you can smurf this Smurf into Smurf Village!
      </Alert>
    );
  }
}

