import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
/* prettier-ignore */
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {},
      singleSmurf: false,
      edit: false,
    };
  }

  componentDidMount() {
    if (this.props.match)
      axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
          const selectedSmurf = response.data.filter(
            s => Number(s.id) === Number(this.props.match.params.id),
          );
          this.setState({ smurf: selectedSmurf[0], singleSmurf: true });
        })
        .catch(err => console.log('ERR getting all smurfs').err);
  }

  render() {
    const { name, height, age } = this.props;
    return (
      <div className="Smurf">
        <Link style={{ textDecoration: 'none' }} to={`/smurf/${this.props.id}`}>
          <Card style={{ width: '40%' }}>
            <CardBody>
              <img
                src="/img/Male_Smurf.jpg"
                alt="Smurf"
                style={{ width: '25%', float: 'left' }}
              />
              <CardTitle>{name ? name : this.state.smurf.name}</CardTitle>
              <CardText>
                <strong>
                  {height ? height : this.state.smurf.height} tall
                </strong>
                <br />
                {age ? age : this.state.smurf.age} smurf years old
              </CardText>
            </CardBody>
          </Card>
        </Link>
      </div>
    );
  }
}
export default Smurf;
