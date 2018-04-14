import React, { Component } from 'react';
import axios from 'axios';
import UpdateSmurf from './UpdateSmurf';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import FaTrash from 'react-icons/lib/fa/trash';
import FaRefresh from 'react-icons/lib/fa/refresh';


class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateSmurf: false
    };
  }

  deleteSmurf = smurfID => {
    axios
      .delete(`http://localhost:3333/smurfs/${smurfID}`)
      .then(response => this.props.getSmurfs())
      .catch(error => console.log(error))
  }

  toggleState = () => {
    this.setState({ updateSmurf: !this.state.updateSmurf });
  }

  render() {
    return (
      <div className="Smurf">
        <Card className="col-4 SmurfCard">
          <CardBody>
            <CardTitle className="SmurfCard__name">{this.props.smurf.name}</CardTitle>
            <div className="SmurfAttr">
              <CardSubtitle>{this.props.smurf.height} tall</CardSubtitle>
              <CardSubtitle>{this.props.smurf.age} smurf years old</CardSubtitle>
            </div>
            <div className="Card__buttons">
              <Button className="SmurfButton" onClick={() => this.deleteSmurf(this.props.smurf.id)}><FaTrash /></Button>
              <Button className="SmurfButton" onClick={() => this.toggleState()}><FaRefresh /></Button>
            </div>
          </CardBody>
        </Card>
        {this.state.updateSmurf ? (
          <UpdateSmurf
            {...this.props}
            {...{ updateSmurf: this.state.updateSmurf, toggleState: this.toggleState }}
          />
        ) : null}
      </div>
    );
  }
};

export default Smurf;
