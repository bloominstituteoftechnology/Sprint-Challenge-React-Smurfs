import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, Container, Row, Col, ListGroup } from 'reactstrap';
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.jpg';
import carousel3 from '../assets/carousel3.jpg';
import carousel4 from '../assets/carousel4.jpg';
import carousel5 from '../assets/carousel5.jpg';
import carousel6 from '../assets/carousel6.jpg';

import Smurf from './Smurf';

const items = [
  {
    src: carousel1,
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src: carousel2,
    altText: "Slide 2",
    caption: "Slide 2"
  },
  {
    src: carousel3,
    altText: "Slide 3",
    caption: "Slide 3"
  },
  {
    src: carousel4,
    altText: "Slide 4",
    caption: "Slide 4"
  },
  {
    src: carousel5,
    altText: "Slide 5",
    caption: "Slide 5"
  },
  {
    src: carousel6,
    altText: "Slide 6",
    caption: "Slide 6"
  }
];

export default class Smurfs extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex: 0
    }
  }

  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {

    const { activeIndex } = this.state;

    const slides = items.map(item => <CarouselItem
                                        onExiting={this.onExiting}
                                        onExited={this.onExited}
                                        key={item.src}                                      >
                                          <img src={item.src} alt={item.altText}/>
                                      </CarouselItem>   
    );

    return  <Container>
                <Row>
                    <Col>
                        <h1>Smurf Village</h1>
                            <Carousel
                            activeIndex={activeIndex}
                            next={this.next}
                            previous={this.previous}>
                                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                                {slides}
                                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                            </Carousel>
                            <ListGroup style={{marginTop: '20px'}}>
                              {this.props.smurfs.map(smurf => {
                                return (
                                  <Smurf
                                    name={smurf.name}
                                    id={smurf.id}
                                    age={smurf.age}
                                    height={smurf.height}
                                    key={smurf.id}
                                    deleteSmurf={this.props.deleteSmurf}
                                    updateSmurf={this.props.updateSmurf}
                                    history={this.props.history}
                                  />
                                );
                              }).reverse()}
                            </ListGroup>
                    </Col>
                </Row>                
            </Container>
  }
}

Smurf.defaultProps = {
  smurfs: [],
};