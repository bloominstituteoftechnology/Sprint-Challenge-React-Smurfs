import React, {Component} from 'react';

class DetailSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
          smurf: []
        };
    }

    componentDidMount() {
        this.setState({
            smurf: this.props.smurf
        });
    }
  
    render() {
        return (
            <div className="Smurf">
            <h3>{this.state.smurf.name}</h3>
            <strong>{this.state.smurf.height} tall</strong>
            <p>{this.state.smurf.age} smurf years old</p>
            </div>
        );
    } 
};

DetailSmurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default DetailSmurf;