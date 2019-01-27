import React from 'react';
import './Components.css';

class SmurfProfile extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="Smurf">
            <h3>{this.props.name}</h3>
            <strong>{this.props.height} tall</strong>
            <p>{this.props.age} smurf years old</p>
            <p style={{cursor: 'pointer'}} onClick={this.props.deleteSmurfHandler(this.props.id)}>Delete Smurf</p>
          </div>
        )
    }
};

export default SmurfProfile;