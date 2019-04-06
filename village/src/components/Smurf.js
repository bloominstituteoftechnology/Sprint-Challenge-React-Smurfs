import React from 'react';
import axios from 'axios';
import  {Link} from 'react-router-dom';

class Smurf extends React.Component {
  state = {
      toggled: false,
      smurf: {},
      smurfPage: false
  }

  flip = () => {
    this.setState({toggled: !this.state.toggled})
  }

  componentDidMount(){
    let id = this.props.match.params.id;
    
    if(this.props.smurfPage){

     
    
    axios.get('http://localhost:3333/smurfs')
         .then(response =>{ 
          console.log('smurfpage',response.data);
          let smurf = response.data.filter(smurf => 
            
           `${smurf.id}` === `${id}`
                );
          console.log(smurf);
          this.setState({smurf: smurf[0]}) })
        }
    
    else {this.setState({smurf: this.props.smurf})}
  }
 
render(){
  return (
  <div className='smurf-container' onClick={this.flip} styles={this.props.smurfPage ? 'margin: 0 auto' : ''}>
    <div className={`Smurf ${this.state.toggled ? 'flip' : ''}`}>
      <div className={`front`}>
        <h1>{this.state.smurf.name}</h1>
        {this.props.prepDelete || this.props.smurfPage ? 
          <div className="delete-txt" onClick={() => this.props.delete(this.state.smurf.id)}>
            DELETE
          </div> 
        
      : null }
      </div>
      <div className={`back`}>
      <Link to={`/smurfs/${this.state.smurf.id}`}><h3>{this.state.smurf.name}</h3></Link>
      <strong>{this.state.smurf.height} tall</strong>
      <p>{this.state.smurf.age} smurf years old</p>
      {this.props.prepDelete || this.props.smurfPage ? 
          <div className="delete-txt" onClick={() => this.props.delete(this.state.smurf.id)}>
            DELETE
          </div> 
        
      : null }
      </div>
      
    </div>
  </div>
    
  );
}


};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

