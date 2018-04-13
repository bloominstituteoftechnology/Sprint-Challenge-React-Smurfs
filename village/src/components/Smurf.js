import React from 'react';
import {Button, Card, CardHeader, CardTitle, CardText, Col, Row} from 'reactstrap';
import './SmurfCard.css'
const Smurf = props => {
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
            </Card>
        </div>
    );
};

export default Smurf;
