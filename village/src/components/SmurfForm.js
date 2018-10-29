import React from 'react';
import axios from 'axios';
import './SmurfForm.css'

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="smurfFormContainer">
        <div className="SmurfForm">
          <form 
            className="formFields"
            onSubmit={this.props.addSmurf}>
            <h2>Please smurf all your Smurf info here</h2>
            <input
              className='inputFields'
              onChange={this.props.handleInputChange}
              placeholder="name"
              value={this.props.newSmurf.name}
              name="name"
            />
            <input
              className='inputFields'
              onChange={this.props.handleInputChange}
              placeholder="age"
              value={this.props.newSmurf.age}
              name="age"
            />
            <input
              className='inputFields'
              onChange={this.props.handleInputChange}
              placeholder="height + unit of measure"
              value={this.props.newSmurf.height}
              name="height"
            />
            <button 
              type="submit"
              className="button">Join Smurf Village</button>

          </form>

         </div>
        </div>  
    );
  }
}

export default SmurfForm;
