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
padding: 10%;
border-radius: 5px;
color: #1F1A38;
width: 150px;
margin: 5% 0;

:hover{
  background: #1F1A38;
  color: #FFF4E2;
  border: 1px solid #FFF4E2;
}
`
class SmurfPage extends Component {

    deleteSmurf = (event) => {
        event.preventDefault();
        this.props.deleteSmurf(this.props.match.params.id);
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
                            <Link to={'/'} style={{textDecoration: 'none'}}><Button name={smurf.id} type='submit' onSubmit={this.deleteSmurf}>Delete Smurf</Button></Link>
                            <Link to={`/update/${smurf.id}`} style={{textDecoration: 'none'}}><Button name={smurf.id} type='button'>Update Smurf</Button></Link>
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