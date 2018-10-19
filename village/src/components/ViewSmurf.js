import React from 'react';


import Smurf from './Smurf';

class ViewSmurf extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log('props...',this.props)
    return (
        <div className="Smurf">
        {
          `${this.props.smurfs[0].id} -- `
        }
      </div>    );
  }
}

export default ViewSmurf;


