import React, { Component } from "react";
import smurfizer from "./SmurfStyles";
import Smurf from "./Smurf";
import styled from "styled-components";

const SmurfsDiv = styled.div`
	background-color: ${smurfizer.smurfCornflower};
`;

const SmurfH1 = styled.h1`
  color: ${smurfizer.smurfNavy};
`;

const SmurfUl = styled.ul`
  border: 5px dashed ${smurfizer.smurfLight};
`;

class Smurfs extends Component {
	render() {
		return (
			<SmurfsDiv>
				<SmurfH1>Smurf Village</SmurfH1>
				<SmurfUl>
					{this.props.smurfs.map(smurf => {
						return (
							<Smurf
								name={smurf.name}
								id={smurf.id}
								age={smurf.age}
								height={smurf.height}
								key={smurf.id}
								deleteSmurf={this.props.deleteSmurf}
							/>
						);
					})}
				</SmurfUl>
			</SmurfsDiv>
		);
	}
}

Smurf.defaultProps = {
	smurfs: []
};

export default Smurfs;
