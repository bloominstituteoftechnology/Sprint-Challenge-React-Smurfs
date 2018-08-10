import React, { Component } from 'react';
import styled from 'styled-components';



const Profile = (props) => {
    
    let smurf = props.getSmurf(props.match.params.id);
    console.log(smurf);
    return <div>{props.match.params.id}</div>
}

export default Profile;