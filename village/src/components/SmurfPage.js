import React, {Component} from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import Smurf from './Smurf';
import {Link} from 'react-router-dom';


const Main = styled.main`
background: #E5BE9E;
border: 1px solid #1F1A38;
border-radius: 10px;
margin: 15% 0 5% 5%;
width: 90%;
height: auto;
padding: 0 5% 5%;
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
`
const H1 = styled.h1`
font-size: 3rem;
font-weight: bold;
text-align: center;
width: 100%;
margin: 5% 0 7.5%;
color: #1F1A38;
`
const Button = styled.button`
background: #FFF4E2;
border: 1px solid #1F1A38;
padding: 1%;
border-radius: 5px;
color: #1F1A38;
width: 150px;
margin: 1% 0;

:hover{
  background: #1F1A38;
  color: #FFF4E2;
  border: 1px solid #FFF4E2;
}
`
class SmurfPage extends Component {
constructor(props){
    super(props);
    this.state = {
        id: this.props.match.params.id
    }
}

    deleteSmurf = (event) => {
        event.preventDefault();
        this.props.history.push(`/`)
        this.props.deleteSmurf(this.state.id);
    }

    
   
    render (){

        return (
            <Main>
                <H1>Current Smurf</H1>
                {this.props.smurfs.map(smurf => { 
                    if (this.props.match.params.id.match(smurf.id)){
                        return (
                            <React.Fragment  key={smurf.id}>
                            <Smurf
                              name={smurf.name}
                              id={smurf.id}
                              age={smurf.age}
                              height={smurf.height}
                              theme={'single'}
                            />
                            <Button name={smurf.id} type='button' onClick={this.deleteSmurf}>Delete Smurf</Button>
                            <Button name={smurf.id} type='button' onClick={()=>{this.props.history.push(`/update/${smurf.id}`)}}>Update Smurf</Button>
                            </React.Fragment>
                          );  
                    }
              })}
    
            
            </Main>
        )
    }
   

}
export default SmurfPage

SmurfPage.propTypes = {
    smurfs: Proptypes.array,
    deleteSmurf: Proptypes.func
}