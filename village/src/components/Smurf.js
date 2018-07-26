import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
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
      <div className="custom-card" >
        <Switch>


          <Route exact path={`/${this.props.id}/modify`}
            render={ props => 
              <Link to={`/${this.props.id}/modify`} className="Smurf">
                  <div {...props} id="Popover1" onClick={this.toggle}>
                    <h3>{name}</h3>
                    <strong>{height} tall</strong>
                    <p>{age} smurf years old</p>
                  </div>
                  <Link to="/"><Button onClick={this.delete} className="btn-danger" >Delete</Button></Link>
              </Link>
             } />
          
          
          <Route exact path="/"
            render={ props => 
              <Link to={`/${this.props.id}/modify`} className="Smurf">
                  <div {...props} id="Popover1" onClick={this.toggle}>
                    <h3>{name}</h3>
                    <strong>{height} tall</strong>
                    <p>{age} smurf years old</p>
                  </div>
              </Link>
             } />


        </Switch>
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

