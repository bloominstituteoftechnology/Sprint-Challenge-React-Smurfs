import React, { Component } from 'react';

class PersonalPage extends Component {
  constructor(props){
      super(props);
      this.state = {
          name: "",
          age: '',
          height: '',
          id: ""
    }
  }
  componentDidMount() {
  const smurf = this.props.smurfs.find(smurf => smurf.id === this.props.match.params.id);
        console.log(this.props.smurfs);
        this.setState({
            name: smurf.name,
            age: smurf.age,
            height: smurf.height,
            id: smurf.id
        })
      }

      handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render(){
      console.log('test', this.props.smurfs);
      return(
    <div> </div>
      )
    }
  }
  export default PersonalPage;
