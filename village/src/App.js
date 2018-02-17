import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
	state = {smurfs: [], name: '', age: '', height: ''};

  componentDidMount(){
  	axios.get('http://localhost:3333/smurfs')
    .then((res)=>{
      this.setState({smurfs: res.data});
    })
    .catch((err)=>{
      console.log(err);
    });
  }

	render() {
   	return (
      <div className="App">
        <div className="container">
        <div class="form">
          <SmurfForm name={this.state.name} age={this.state.age} height={this.state.height}handleInput={this.handleInput} addSmurf={this.addSmurf} />
        </div>
        <div class="list">  
          <Smurfs toggleEdit={this.toggleEdit} edit={this.state.edit} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} modifySmurf={this.modifySmurf} name={this.state.name} age={this.state.age} height={this.state.height} handleInput={this.handleInput}/>
        </div>
        </div>
      </div>
    );
  }

  addSmurf = (event)=>{
    event.preventDefault();
    let {name, age, height} = this.state;
    let img = this.getSmurfImg(age);
    let smurf = {
    	name: this.state.name, 
    	age: this.state.age,
    	height: this.state.height,
    	edit: false,
      img: img
    	}

    axios.post('http://localhost:3333/smurfs', smurf)
    .then((res)=>{
    	console.log(res);
      this.setState({smurfs: res.data});
    })
    .catch((err)=>{
      console.log(err);
    });
      
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  deleteSmurf = (id)=>{
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then((res)=>{
    	let updatedSmurf = this.state.smurfs.filter((smurf)=>{
    		return smurf.id !== res.data.SmurfRemoved.id;
    	});
      this.setState({smurfs: updatedSmurf});
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  modifySmurf = (modified)=>{
    let img = this.getSmurfImg(modified.age);
    modified.img = img;
    axios.put(`http://localhost:3333/smurfs/${modified.id}`, modified)
    .then((res)=>{
    	let copySmurfs = this.state.smurfs;
    	copySmurfs.forEach((smurf, i)=>{
    		if(smurf.id === res.data.id){
    			copySmurfs[i] = res.data;
    		}
    	});
      this.setState({smurfs: copySmurfs});
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  handleInput = (event)=>{
  	let name = event.target.name;
  	let value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  toggleEdit = (id)=>{
		let copySmurfs = this.state.smurfs;
		copySmurfs.forEach((smurf)=>{
			if(smurf.id === id){
				smurf.edit = true;
			}
		});
		this.setState({smurf: copySmurfs});
	}

  getSmurfImg = (age)=>{
      if(age < 5){
      return 'http://bluebuddies.com/stories/bsfw/jpg/BSFW6.jpg';
    }else if(age < 16){
      return 'https://orig00.deviantart.net/53b5/f/2013/236/b/4/young_papa_smurf_by_tairusuku-d6jkvgq.png';
    }else if(age < 30){
      return 'https://vignette.wikia.nocookie.net/smurfs/images/a/a2/Male_Smurf_Comic_Book.jpg';
    }else if(age < 50){
      return 'https://vignette.wikia.nocookie.net/smurfs/images/7/70/Papa_Smurf_Cartoon.jpg';
    }else if(age < 75){
      return 'https://vignette.wikia.nocookie.net/smurfs/images/b/bd/Papa_Smurf123.png';
    }else if(age < 100){
      return 'https://vignette.wikia.nocookie.net/smurfsfanon/images/b/bd/Grandpa_Smurf_Hero_Stories.jpg';
    }else if(age > 100){
      return 'https://vignette.wikia.nocookie.net/smurfs/images/a/ae/Grandpa_Smurf_Comic_Book.jpg';
    }else{
      return 'http://moziru.com/images/grave-clipart-blank-7.jpg';
    }
  }
}
export default App;
