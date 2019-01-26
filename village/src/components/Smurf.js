import React from 'react';

class Smurf extends React.Component {

    constructor(props){
        super(props);
        this.state={
            deleteHandler: this.props.deleteHandler
        }

    }
    deleteSmurf=(event)=>{
        this.props.deleteHandler(this.props.id)
    }

    render() {
        return (
            <div className="Smurf">
                <p>{this.props.id} : This is your id</p>
                <h3>{this.props.name}</h3>
                <strong>{this.props.height} tall</strong>
                <p>{this.props.age} smurf years old</p>
                <button onClick={this.deleteSmurf}>Delete</button>
            </div>
        );
    };
}

Smurf.defaultProps = {
    name: '',
    height: '',
    age: ''
};

export default Smurf;