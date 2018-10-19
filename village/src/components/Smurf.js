import React from "react";

const Smurf = props => {
  // if (props.isEditing === false) {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div className="button-wrapper">
        <button
          type="button"
          className="delete-button"
          onClick={event => {
            props.deleteSmurf(event, props.id);
          }}
        >
          Delete Smurf?
        </button>
        {/* <button
          type="button"
          className="edit-button"
          onClick={event => {
            props.toggleEditing(event);
          }}
        >
          Edit Smurf
        </button> */}
      </div>
    </div>
  );
  // } else {
  //   console.log(props);
  //   return (
  //     <div className="Smurf">
  //       <form
  //         className="edit-form"
  //         onSubmit={event => {
  //           props.updateSmurf(event, props.id);
  //         }}
  //       >
  //         <input
  //           onChange={event =>
  //             props.editsChangeHandler(event.target.name, event.target.value)
  //           }
  //           placeholder="name"
  //           value={props.editedSmurf.name}
  //           name="name"
  //         />
  //         <input
  //           onChange={event =>
  //             props.editsChangeHandler(event.target.name, event.target.value)
  //           }
  //           placeholder="age"
  //           value={props.editedSmurf.age}
  //           name="age"
  //         />
  //         <input
  //           onChange={event =>
  //             props.editsChangeHandler(event.target.name, event.target.value)
  //           }
  //           placeholder="height"
  //           value={props.editedSmurf.height}
  //           name="height"
  //         />
  //         <button type="submit">Submit changes</button>
  //       </form>
  //       <button
  //         onClick={event => {
  //           props.toggleEditing(event);
  //         }}
  //       >
  //         Cancel edit
  //       </button>
  //     </div>
  //   );
  // }
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
