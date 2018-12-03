import React from "react";
import styled from "styled-components";
import smurfizer from "./SmurfStyles";

const SmurfDiv = styled.div`
	${smurfizer.smurfor}: ${smurfizer.smurfSky};
  border: 1px solid ${smurfizer.smurfLight};
  padding: 10px;
`;
const SmurfH3 = styled.h3`
	${smurfizer.smurfor}: ${smurfizer.smurf};
`;
const SmurfStrong = styled.strong`
	${smurfizer.smurfor}: ${smurfizer.smurfLight};
`;
const SmurfP = styled.p`
	${smurfizer.smurfor}: ${smurfizer.smurfDark};
`;
const SmurfButton = styled.button`
  background-${smurfizer.smurfor}: ${smurfizer.smurfSky};
  ${smurfizer.smurfor}: ${smurfizer.smurf};`;

const Smurf = smurfer => {
	return (
		<SmurfDiv>
			<SmurfH3>{smurfer.name}</SmurfH3>
			<SmurfStrong>smurfing {smurfer.height} tall</SmurfStrong>
			<SmurfP>{smurfer.age} smurf years old</SmurfP>
			<SmurfButton
				onClick={() => {
					smurfer.deleteSmurf(smurfer.id);
				}}>
				Put This Smurf Out of Its Missery
			</SmurfButton>
		</SmurfDiv>
	);
};

Smurf.defaultProps = {
	name: "",
	height: "",
	age: ""
};

export default Smurf;
