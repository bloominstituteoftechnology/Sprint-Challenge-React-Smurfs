import React from 'react' 
import axios from 'axios'

class SmurfUpdate extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            name: '',
            age: '',
            height: '',
            id: this.props.match.params.id
        }
    }

    onInputChange (event) {
        this.setState({ [event.target.name] : event.target.value })
    }

    onSubmit (event){
        event.preventDefault();
        axios.put(`http://localhost:3333/smurfs/${this.state.id}`, {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        })
            .then(res => { window.location = "/smurfs" })
            .catch(err => { console.log(err) })
    }

    render(){
        return (
            <div className="newSmurf">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" name="name" placeholder="Name" onChange={this.onInputChange.bind(this)}/>
                    <input type="number" name="age" placeholder="Age" onChange={this.onInputChange.bind(this)}/>
                    <input type="number" name="height" placeholder="Height" onChange={this.onInputChange.bind(this)}/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default SmurfUpdate