import React from 'react' 
import axios from 'axios'
import { Link } from 'react-router-dom'

class SingleSmurf extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            smurf: '',
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:3333/smurfs`)
            .then(res => {
                const id = this.props.match.params.id
                console.log(res)
                this.setState({
                    smurf: res.data.filter(smurf => smurf.id == id)[0],
                })
            })
            .catch(err => console.log(err))
    }

    render(){
        const props = this.state.smurf || {
            name: 'n/a',
            age: 'n/a',
            id: -1,
            height: 'n/a'
        }
        return (
            <div className="Smurf">
              <h3>{props.name}</h3>
              <strong>{props.height} tall</strong>
              <p>{props.age} smurf years old</p>
              <button id={props.id} onClick={props.onDelete}>Delete</button>
              <Link to={`/smurfs/${props.id}`}><button>Update</button></Link>
            </div>
        );
    }
}

export default SingleSmurf