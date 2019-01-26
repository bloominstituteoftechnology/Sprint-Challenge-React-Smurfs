import React from 'react';
import Loading from './Loading';
import axios from 'axios';

class SmurfPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      error: null,
      smurf: {},
    }
  }
  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        const smurf = res.data.filter(smurf => smurf.id === Number(this.props.match.params.id))[0];
        if (smurf)
          this.setState({ smurf, error: null, loading: false });
        else
          this.setState({ error: 'No smurf by that ID found!', loading: false });
      })
      .catch(err => console.log(err));
  }
  render(){
    return this.state.loading
      ? <Loading />
      : this.state.error 
        ? <h2>{this.state.error}</h2>
        : (
        <section>
          <h1>Welcome to {this.state.smurf.name}'s Page!</h1>
          <p>{this.state.smurf.name} is {this.state.smurf.age} smurf years old!</p>
          <p>{this.state.smurf.name}'s height is {this.state.smurf.height}</p>
        </section>
      );
  }
}

export default SmurfPage;