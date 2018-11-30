import React from 'react';
import { Link } from 'react-router-dom';

class Smurf extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      smurf: null,
      name: null,
      height: null,
      age: null,
      id: null
    }
  }

  
  componentDidMount(){
    let smurfs = this.props.smurf.map(s => s);
    let smurf = smurfs.find(s => s.id.toString() === this.props.match.params.smurfId);

    this.setState({
      smurf: smurf,
      name: smurf.name,
      height: smurf.height,
      age: smurf.age,
      id: smurf.id
    })

    console.log(this.props)
  }

  render(){
    return (
      <div className="Smurf">
       <h3>{this.state.name}</h3>
       <strong>{this.state.height} tall</strong>
       <p>{this.state.age} smurf years old</p>

       <button onClick={() =>{
         this.props.delete(this.state.id)
         this.props.history.push("/");
       } }>Remove Smurf</button>
       <Link to={`/smurf-form/${this.state.id}`}>
           <button>Edit Smurf</button>
       </Link>
     </div>
    )
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

