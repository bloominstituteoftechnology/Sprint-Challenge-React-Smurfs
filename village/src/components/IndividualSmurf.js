import React from 'react'
import axios from 'axios'

class IndividualSmurf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            smurf: {}

        }
    }


componentDidMount() {
    const smurfId = this.props.location.pathname.split('/')

    this.setState({smurf: this.props.smurfs.find(smurf => smurf.id == smurfId[2])})
}




render() {
    return (
        <div>

        </div>
    )
}

}

export default IndividualSmurf