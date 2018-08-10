import React, { Component } from 'react';
import styled from 'styled-components';



const Profile = (props) => {
    
    let smurf = props.getSmurf(props.match.params.id);
    console.log(smurf);
    return (
        <div>
            <h1>{smurf.name}</h1>
            <h3>{smurf.age}</h3>
            <h3>{smurf.height}</h3>
        </div>
    )
}

export default Profile;