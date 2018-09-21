import React from 'react';

export default function RouteSmurfPage(props) {
    console.log(props.smurfs)
    // const smurf = props.smurfs.filter(
    //     smurf => smurf.
    // )
    const character = props.smurfs.find(
        character => character.id === props.match.params.id
    )
    console.log(character.id)

    return (
        <div className="RouteSmurfPage">
            <h1>Router Page testing</h1>
            {/* <h1>
                Name: {character.name}
            </h1>
            <p>
                Age: {character.age}
            </p>
            <p>
                Height: {smurf.height}
            </p> */}
        </div>
    )
}