import React from 'react';

export default props => {
    const smurf = this.props.smurfs.find(smurf => `${smurf.id}` === this.props.match.params.id)
    return <h1>{smurf.name}</h1>
}