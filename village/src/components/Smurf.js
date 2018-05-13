import React from 'react';
import './Smurf.css';

const Smurf = props => {
  return (
    <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div className="flipper">
        <div className="front smurf-card">
          <h3>{props.name}</h3>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>
          <button className="remove-button" onClick={() => props.removeSmurf(props.id)}>Remove From Village</button>
        </div>
        <div className="back smurf-card">
          <img src="http://www.impulsegamer.com/articles/wp-content/uploads/2015/07/smurfs-620x350.jpg" />
        </div>
      </div>
    </div>
  );
};

{/* <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
  <div class="flipper">
    <div class="front">
      <!-- front content -->
		</div>
    <div class="back">
      <!-- back content -->
		</div>
  </div>
</div> */}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

