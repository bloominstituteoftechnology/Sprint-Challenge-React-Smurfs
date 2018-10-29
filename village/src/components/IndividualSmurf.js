import React from 'react'

class IndividualSmurf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {}

        }
    }


componentDidMount() {
    const noteId = this.props.location.pathname.split('/')
    this.setState({note: this.props.notes.find(note => note._id == noteId[2])})
}




render() {
    return (
        <div className="Smurf">
        <div className="smurfImg"/>
        <div className="flexyDiv">
          <p><strong>Title</strong> {this.state.note.title}</p>
          <p><strong>Note:</strong> {this.state.note.textBody}</p>
        </div>
      </div>
    )
}

}

export default IndividualSmurf