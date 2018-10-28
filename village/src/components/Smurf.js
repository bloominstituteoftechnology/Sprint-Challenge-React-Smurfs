import React from 'react';
import {Link} from "react-router-dom";

const Smurf = ({name, height, age, id,deleteFriendHandler}) => {
  return (
      <li className='card tc dib br3   pa3 ma2  bw2 shadow-5 '>
  <img className="card-img-top" src={`https://api.adorable.io/avatars/285/${id}.png`} alt={`Card image cap ${id}`} />
  <div className="card-body">
    <h3 className="card-title">{name}</h3>
    <h5 className="card-title"> {age}smurf years old</h5>
    <h5 className="card-title">{height} tall</h5>
    <p className="card-text">They have the same basic body plan but can be differentiated by one or two distinguishing accessories..</p>
    <Link to={`/Smurfs/${id}`} ><a href="#" className="btn btn-primary">Detail</a></Link>
    <a href="#" className="btn btn-danger" onClick={deleteFriendHandler(id)} >Delete</a>
  
</div></li>
   
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

