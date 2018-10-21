import React, { Component } from 'react';
import Axios from 'axios';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      isUpdate:false
    };
  }
  componentDidMount(){
     console.log(this.props)
     if(this.props.match.params.id){
       Axios.get(`http://localhost:3333/smurfs/${this.props.match.params.id}`)
            .then(res => {

              this.setState({name:res.data[0].name,
                             age:res.data[0].age,
                             height:res.data[0].height, 
                             isUpdate:true})
            })
     }
  }
  addSmurf = event => {
    event.preventDefault();

    // add code to create the smurf using the api
    let newSmurf = {
      name:this.state.name,
      age:this.state.age,
      height:this.state.height  
    }
    Axios.post('http://localhost:3333/smurfs',newSmurf)
         .then(res => {
           //experimenting here:
           if(res.data){
              this.props.history.push('/')
              this.props.handleAddNewSmurf()
           }
           
         })
         .catch(error => console.log(error))

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {

    let buttonText = this.state.isUpdate ? 'Update': 'Add to the village'

    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
