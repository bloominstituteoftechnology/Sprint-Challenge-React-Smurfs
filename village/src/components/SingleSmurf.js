import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { Row, Col, Card, Button } from 'react-materialize';

class SingleSmurf extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
            id: 0
        }
    }

    componentDidMount() {
        // To prevent too many API calls, it's probably better to utilize the state of the App, so I refactored that.
        // A flaw of this method is that we need to first mount the API call in our App, so if we have a direct path to
        // this url, there will be a mount error. In that case, it would be better to utilize an API call here.
        // let url = 'http://localhost:3333/smurfs';
        let id = Number(this.props.match.params.id);
        // axios.get(url)
        //     .then(res => {
        //         let found = res.data.find(smurf => smurf.id === id);
        //         this.setState({
        //             name: found.name,
        //             age: found.age,
        //             height: found.height,
        //             id: found.id
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        let found = this.props.smurfs.find(smurf => smurf.id === id);
        this.setState({
            name: found.name,
            age: found.age,
            height: found.height,
            id: found.id
        });
    }



    render(){
        return (
            <Row>
                <Col m={8} s={12} offset="m2">
                    <Card className='blue-grey darken-1' textClassName='white-text' title={this.state.name}>
                        <strong>{this.state.height} tall</strong>
                        <p>{this.state.age} smurf years old</p>
                        <Link to={`/smurfs/${this.state.id}`}><Button> Update </Button></Link>
                        <Link to='/smurfs'><Button> Back </Button></Link>
                    </Card>
                </Col>
            </Row>
        );
    }
};


export default SingleSmurf;

