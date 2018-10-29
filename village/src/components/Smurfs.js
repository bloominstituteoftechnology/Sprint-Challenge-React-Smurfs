import React from 'react'

import Smurf from './Smurf';

const Smurfs = props => {

    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <div className="titleBorder"/>
        <ul className="smurfList">
          {props.notes.map(note => {
            return (
              <Smurf
                title={note.title}
                _id={note._id}
                textBody={note.textBody}
                key={note._id}
                deleteSmurf={props.deleteSmurf}
                toggleEditNoteForm={props.toggleEditNoteForm}
                note={note}
              />
            );
          })}
        </ul>
      </div>
    );
  
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
