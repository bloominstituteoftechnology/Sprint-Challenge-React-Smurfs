import React from 'react';

class EditSmurf extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      age: '',
      height: '',
    }
  }

  componentDidMount(){
    let name;
    let height;
    let age;
    const id = this.props.match.params.id;
    const smurf = this.props.smurfs.find(smurf => {return `${smurf.id }` === id})
    console.log()

    if (smurf){
      name = smurf.name;
      height = smurf.height;
      age = smurf.age;

      this.setState({
        name: name,
        age: age,
        height: height
      })
    }
  }



  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateSmurf = (e, id, name, age, height) => {
    let smurfId = this.props.match.params.id
    id = Number(smurfId);
    e.preventDefault();
    this.props.updateSmurf(
      id,
      {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })

  }


  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit = {this.updateSmurf}>
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
          <button type="submit">Edit Smurf</button>
        </form>
      </div>
    );
  }


}

export default EditSmurf;
