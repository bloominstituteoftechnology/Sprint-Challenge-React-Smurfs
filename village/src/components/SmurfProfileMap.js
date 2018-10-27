import React from 'react';

import SmurfProfile from './SmurfProfile';


class SmurfProfileMap extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
                {this.props.smurfs.map(smurf => {
                    console.log('hello') 
                    if(this.props.match.params.id === `${smurf.id}`) {  
                        return (
                            <SmurfProfile
                                name={smurf.name}
                                age={smurf.age}
                                height={smurf.height}
                                id={smurf.id}
                                deleteSmurfHandler={this.props.deleteSmurfHandler} />
                        )
                    }
                })}
            </div>

        )
    }
};

export default SmurfProfileMap;