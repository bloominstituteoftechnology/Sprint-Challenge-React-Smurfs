import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import axios from 'axios';

export default class SmurfPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        smurf: null
      };
    }
  
    componentDidMount() {
      // change this line to grab the id passed on the URL
      const id = this.props.match.params.id;
      this.fetchMovie(id);
    }
  
    fetchMovie = id => {
      axios
        .get(`http://localhost:3333/smurfs/${id}`)
        .then(response => {
          this.setState(() => ({ smurf: response.data }));
        })
        .catch(error => {
          console.error(error);
        });
    };
    // Uncomment this code when you're ready for the stretch problems
    componentWillReceiveProps(newProps){
      if(this.props.match.params.id !== newProps.match.params.id){
        this.fetchMovie(newProps.match.params.id);
      }
    }
  
    render() {
    if (!this.state.smurf) {
        return <div>Loading smurf information...</div>;
        }
  
      return (
        <div className="Smurf">
            <h3>{this.state.smurf.name}</h3>
            {/* <strong>{props.smurf.height} tall</strong>
            <p>{props.smurf.age} smurf years old</p>
            <p>{props.smurf.id}</p>
            <NavLink to={`/smurfs/${props.smurf.id}`} >Go to page</NavLink>
            <button onClick={event => {props.goToSmurfForm(event, props.smurf.id)}}>Edit Smurf</button>
            <button onClick={() => props.deleteSmurf(props.smurf.id)}>Delete Smurf</button> */}
        </div>
      );
    }
  }

  SmurfPage.defaultProps = {
    smurf: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.string,
        height: PropTypes.string,
    }),
    goToSmurfForm: PropTypes.func,
    deleteSmurf: PropTypes.func,
  };