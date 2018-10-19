import React from 'react';


const EditSmurf = props => {
    return (
        <form className='edit-smurf-form'>
            <input
                placeholder={props.smurf.name}
                name='editName'
                type='text'
                value={props.name}
                onChange={props.editSmurfHandler}
            />
            <input
                placeholder={props.smurf.age}
                name='editAge'
                type='text'
                value={props.editAge}
                onChange={props.editSmurfHandler}
            />
            <input
                placeholder={props.smurf.height}
                name='editHeight'
                type='text'
                value={props.editHeight}
                onChange={props.editSmurfHandler}
            />
            <button onClick={props.saveEdits}>Save changes</button>
        </form>




    )
}






export default EditSmurf;