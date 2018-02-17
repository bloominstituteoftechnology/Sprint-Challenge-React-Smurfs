import React from 'react';

class Smurf extends React.Component {
	
	state = {name: this.props.name, age: this.props.age, height: this.props.height}

	handleLocalChange = (event)=>{
		let name = event.target.name;
  	let value = event.target.value;
    this.setState({
      [name]: value,
    	});
	}

	renderHelper = ()=>{
		if(this.props.edit){
			return (
				<div>
					<input value={this.state.name} name='name' onChange={this.handleLocalChange} />
			    	<input value={this.state.height} name='height' onChange={this.handleLocalChange} />
			    	<input value={this.state.age} name='age' onChange={this.handleLocalChange} />
			    	<button onClick={()=>{this.props.modify({name: this.state.name, age: this.state.age, heigth: this.state.height, edid: false, id: this.props.id})}}>Save</button>
			    </div>
			)
		}else{
			return (
				<div>
				<img src={this.props.img} />
				<h3>{this.props.name}</h3>
		    	<strong>{this.props.height} tall</strong>
		    	<p>{this.props.age} old</p>
		    	<button onClick={()=>{this.props.delete(this.props.id)}}>Delete</button>
			   <button onClick={()=>{this.props.toggleEdit(this.props.id)}}>Edit</button>
    			</div>
			)
		}
	}
	render(){
	  return (
	    <div className="Smurf">
	      {this.renderHelper()}
		       
		  </div>
		);
	}

}

export default Smurf;