import React, {Component} from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';


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


class UpdatePage extends Component {
    render(){
        return (
            <Main>
            <H1>Current Smurf</H1>
                    {this.props.smurfs.map(smurf => { 
                        if (this.props.match.params.id.match(smurf.id)){
                            return (
                                <Smurf
                                  name={smurf.name}
                                  id={smurf.id}
                                  key={smurf.id}
                                  age={smurf.age}
                                  height={smurf.height}
                                  theme={'single'}
                                />
                              );  
                        }
                  })}
              <SmurfForm 
              props={this.props}
              match={this.props.match}
              updateSmurf={this.props.updateSmurf}
              mode="Update Smurf"
              />
            </Main>
        )
    }
   

}
export default UpdatePage

UpdatePage.propTypes = {
    smurfs: Proptypes.array,
    updateSmurf: Proptypes.func
}