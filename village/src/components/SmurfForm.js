import React from 'react';
 
const SmurfForm = (props) =>  {
 return (
    <div className="SmurfForm">
      <form onSubmit={props.addSmurf}>
        <input
          onChange={props.updateName}
          placeholder="name"
          value={props.name}
        />
        <input
          onChange={props.updateAge}
          placeholder="age"
          value={props.age}
        />
        <input
          onChange={props.updateHeight}
          placeholder="height"
          value={props.height}
        />
        <button type="submit" onSubmit={props.addSmurf} >Add to the village</button>
      </form>
    </div>
  );
}

export default SmurfForm;