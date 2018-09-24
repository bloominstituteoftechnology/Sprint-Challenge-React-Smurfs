import React from 'react';

class SmurfCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            name: '',
            height: '',
        }
    }

    componentDidMount() {
        const Smurf = this.props.smurfs.find(smurf => smurf.id == this.props.match.params.id);
        this.test();
    }

    test = () => {
        const Smurf = this.props.smurfs.find(smurf => smurf.id == this.props.match.params.id);
        this.setState({
            age: Smurf.age,
            name: Smurf.name,
            height: Smurf.height
        })
    }

    render() {
        return (
            <div className="SmurfCard">
            {/* <button onClick={this.test}>Where's my Smurf?</button> */}
            <h3>{this.state.name}</h3> 
            <strong>{this.state.height} tall</strong>
            <p>{this.state.age} smurf years old</p>
            <button onClick={()=> {this.props.history.push("/smurfs")}}>Go Back to Village</button>
            </div>
            
        );
    };
}

SmurfCard.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default SmurfCard;