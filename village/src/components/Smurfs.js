import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import SmurfForm from './SmurfForm';
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h2>Our lovely cottage's neighbours</h2>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
                <Smurf
                  delete={this.props.deleteSmurf}
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
                <Route exact path={`/${smurf.id}/modify`}
                  render={ props => <SmurfForm {...props} 
                                      name={smurf.name}
                                      id={smurf.id}
                                      age={smurf.age}
                                      height={smurf.height}
                                      key={smurf.id}
                                      getSmurfs={this.props.getSmurfs}
                                    />
                  }
                />
              </div>                                                              
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
 