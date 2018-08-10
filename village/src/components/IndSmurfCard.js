import React, { Fragment } from "react";

const IndSmurfCard = props => {
  // let indName = "";
  // let age = 0;
  // let email = "";
  // // console.log("IndSmurfCardRoute", props.match.params.name, props.data);
  // for (let i = 0; i < props.data.length; i++) {
  //   let name = props.data[i].name;
  //   let activeName = props.match.params.name;
  //   if (activeName === name) {
  //     console.log("Match");
  //     indName = name;
  //     age = props.data[i].age;
  //     email = props.data[i].email;
  //   }
  // }
  return (
    <Fragment>
      <div>
        <h1>Fill</h1>
        <h2>55 years</h2>
        <h2>6 ft 9</h2>
      </div>
    </Fragment>
  );
};

export default IndSmurfCard;
