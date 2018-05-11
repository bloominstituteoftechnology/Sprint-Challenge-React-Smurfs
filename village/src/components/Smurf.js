import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button} from 'reactstrap';

/**
 * REFACTOR: from a stateless to a stetfull one component
 * BECAUSE: this allow to add new functionalities I would like to intorduce.
 */
class Smurf extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  delete = () => {
    this.props.delete(this.props.id);
  }

  render() {
    console.log(this.porps)
    const {name, height, age} = this.props;
    return (
      <div className="Smurf clearfix">
        <div id="Popover1" onClick={this.toggle}>
          <h3>{name}</h3>
          <strong>{height} tall</strong>
          <p>{age} smurf years old</p>
        </div>
        <Link to={`/${this.props.id}/modify`} ><Button className="btn-secondary float-left" >Modify</Button></Link>
        <Button onClick={this.delete} className="btn-danger float-right" >Delete</Button>
    </div>
    );
  }
}



// const Smurf = props => {
//   return (
//     <div className="Smurf">
//       <div>
//         <h3>{props.name}</h3>
//         <strong>{props.height} tall</strong>
//         <p>{props.age} smurf years old</p>
//       </div>
//     </div>
//   );
// };

// Smurf.defaultProps = {
//   name: '',
//   height: '',
//   age: ''
// };

export default Smurf;

