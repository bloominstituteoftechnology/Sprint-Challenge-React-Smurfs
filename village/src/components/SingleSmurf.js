import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SingleSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
	//   editing: false,
	  id: '',
      name: '',
      age: '',
      height: '',      
    };
  }

  componentDidMount() {
    axios
     	.get('http://localhost:3333/smurfs')
    	.then(res => {
        	res.data.map(smurf => {
            	if (this.props.location.pathname.includes(`${smurf.id}`)) {
                	this.setState({
						name: smurf.name,
						age: smurf.age,
						height: smurf.height
                	})
            	}
        	})
     	})
     	.catch(err => {
        	console.error('Error', err);
     	})
  }

//   handleChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   editSmurf = () => {
//     this.setState({
// 	  editing: !this.state.editing,
//     })
//   }

//   submitEdit = event => {
//     event.preventDefault();
//     const { id, name, age, height } = this.state;
//     let editedSmurf = { id: id, name: name, age: age, height: height }
// 	EventEmitter.dispatch('updateSmurf', editedSmurf)
//     this.setState({
// 	  editing: false,
// 	  id: '',
//       name: '',
//       age: '',
//       height: ''
//     })
//   }

	render() {
        const { editing, id, name, age, height } = this.state;
        return (
			<div className="SingleSmurf">
					<h3>{name}</h3>
				<strong>{height} tall</strong>
				<p>{age} smurf years old</p>
				{/* <div className='smurf-btns'>
					<div 
						className='smurf-btn' 
						id={id} 
						onClick={() => this.editSmurf(name, height, age, editing)}>
						Edit
					</div>
					<div 
						className='smurf-btn'  
						onClick={() => EventEmitter.dispatch('deleteSmurf', id)}>
						Delete
					</div>
				</div> */}
				{/* <div className={editing ? 'editing-form' : 'hidden'}>
					<form onSubmit={this.submitEdit}>
						<input
						className='edit-input'
						onChange={this.handleChange}
						placeholder="name"
						value={name}
						name="name"
						required
						/>
						<input
						className='edit-input'
						onChange={this.handleChange}
						placeholder="age"
						value={age}
						name="age"
						required
						/>
						<input
						className='edit-input'
						onChange={this.handleChange}
						placeholder="height"
						value={height}
						name="height"
						required
						/>
						<input className='submit-edit' type="submit" value="Submit Edits"/>
					</form>
				</div> */}
			</div>
        )
    }
};

export default SingleSmurf;
