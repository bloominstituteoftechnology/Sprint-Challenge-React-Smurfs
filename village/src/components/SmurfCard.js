import React, { Component } from 'react';
import SmurfForm from './SmurfForm';
import CardStyle from './CardStyle';

class SmurfCard extends Component {
   constructor(props) {
     super(props);

     this.state = {
        id:this.props.match.params.id,
        name: null,
        age: null,
        height: null
     }
   }
   componentDidMount() {
    const card = this.props.smurfs.find( smurf => `${smurf.id}` === this.state.id);    
    console.log(card) 
    // this.setState({
    //     name:`${card.name}`,
    //     age: `${card.age}`,
    //     height: `${card.height}`
    //    })
    }
  render() {
    const spa = this.props.smurfs.find( smurf => `${smurf.id}` === this.state.id);
    console.log(spa);
    const name = spa ? <span>{spa.name}</span> : <span>"Loading"</span>;
    const age = spa ? <span>{spa.age}</span> : <span>Loading</span>;
    const height = spa ? <span>{spa.height}</span> : <span>"Loading"</span>;

    return (
      <CardStyle>
      <h3>{name}</h3>{" "}
         <strong>{height} tall</strong>
      <p>{age} smurf years old</p>
      </CardStyle>
    );
  }
}

export default SmurfCard;

