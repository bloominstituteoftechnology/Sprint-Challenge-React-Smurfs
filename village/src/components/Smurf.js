import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {
  let name;
  let height;
  let age;
  const id = props.match.params.id;
  const smurf = props.smurfs.find(smurf => {return `${smurf.id }` === id})

  if (smurf){
    name = smurf.name;
    height = smurf.height;
    age = smurf.age;
  }

  this.deleteSmurf = (e, id) => {
    let smurfId = props.match.params.id
    let listId = props.id
    id = (smurfId) ? smurfId: listId

    // id = props.id;
    e.preventDefault();
    props.deleteSmurf(id);
  }

  return (

    <div>
    { (smurf)
      ?     <div className="Smurf">
            <h3>{name}</h3>
            <strong>{height} tall</strong>
            <p>{age} smurf years old</p>
            <button onClick={this.deleteSmurf}> Delete Smurf </button>
            <Link to={{pathname: '/smurfs/' + id + '/edit', state: { name: name, age: age, height: height} }}><button> Edit Smurf </button></Link>
          </div>
      :  <div className="Smurf">
            <Link to={`/smurfs/${props.id }`}> <h3>{props.name}</h3></Link>
            <strong>{props.height} tall</strong>
            <p>{props.age} smurf years old</p>
            <button onClick={this.deleteSmurf}> Delete Smurf </button>
            <Link to={{pathname: '/smurfs/' + props.id + '/edit', state: { name: props.name, age: props.age, height: props.height} }}><button> Edit Smurf </button></Link>
          </div>}
        </div>

  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
