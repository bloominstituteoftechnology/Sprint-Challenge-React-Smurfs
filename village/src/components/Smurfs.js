import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import Smurf from './Smurf';
import { ListGroup } from 'reactstrap';
import { Jumbotron } from 'reactstrap';


class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <Link to="/" > Home</Link> <br/>
          <Link to="/add">Add a smurf</Link>
          <Jumbotron className = "smurfvillage">
            <h1>Smurf Village</h1>
        </Jumbotron>

        <ListGroup>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ListGroup>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
