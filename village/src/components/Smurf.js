import React from 'react';
import axios from 'axios';
import {Button, Card, CardHeader, CardTitle, CardText, Col, Row} from 'reactstrap';
import './SmurfCard.css'
const Smurf = props => {


    const deleteSmurf = (e) => {
        axios.delete(`http://localhost:3333/smurfs/${e.target.id}`)
            .then(response => this.getSmurfs())
            .catch(error => console.log(`Error deleting smurf: ${error}`))
    };

    return (
        <div className="Smurf">
            {/*<h3>{props.name}</h3>*/}
            {/*<strong>{props.height} tall</strong>*/}
            {/*<p>{props.age} smurf years old</p>*/}
            <Card key={props.id} className='SmurfCard'>
                <CardHeader>
                    {props.name}
                </CardHeader>
                <CardTitle>
                    <Row>
                        <Col>
                            Height: {props.height}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Age: {props.age}
                        </Col>
                    </Row>
                </CardTitle>
                <Button color='danger' id={props.id} onClick={deleteSmurf}>Delete</Button>
            </Card>
        </div>
    );
};

export default Smurf;
