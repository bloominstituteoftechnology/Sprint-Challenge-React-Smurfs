import React, { Fragment } from "react";

const IndSmurfCard = props => {
  // // console.log("props.match.params.id", props.match.params.id);
  // // console.log("IndSmurf Card", props.smurfs[2].id);
  // let indName = "";
  // let height = "";
  // let age = 0;
  // let currentId = 0;
  // // console.log("IndSmurfCardRoute", props.match.params.name, props.data);
  // for (let i = 0; i < props.smurfs.length; i++) {
  //   let id = props.smurfs[i].id;
  //   let activeId = props.match.params.id;
  //   console.log("ID", id);
  //   console.log("paramsID", activeId);
  //   if (activeId === id) {
  //     console.log("Match");
  //     currentId = currentId + activeId;
  //     console.log("Current ID", currentId);
  //     // indName = props.smurfs[i].name;
  //     // height = props.smurfs[i].height;
  //     // age = props.smurfs[i].age;
  //   }
  // }
  console.log(props.smurfs);
  console.log(props.match.params.id);
  return (
    <Fragment>
      <div>
        <h1>{props.smurfs[props.match.params.id].name}</h1>
        <h2>{props.smurfs[props.match.params.id].height} smurf feet tall</h2>
        <h2>{props.smurfs[props.match.params.id].age} smurf years old</h2>
      </div>
    </Fragment>
  );
};

export default IndSmurfCard;
