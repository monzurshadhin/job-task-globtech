import React from 'react';
import '../Features/Features.css'
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from '../Header/Header';
import useFeatures from '../../Hooks/useFeatures';

const Features = () => {
    const {features} = useFeatures();
    console.log(features);
    return (
        <div className='features-body'>
              <Header></Header>
      <Container>
      <h2 className='features-title'>Features</h2>
      <h4 className='features-sub-title'>Our Features & Services</h4>
      <Row xs={1} md={2} lg={3} className="g-4 g-lg-5 my-4" >
          {features.map((feature) => (
          
            <Col key={feature.id}>
              
              <Card className='features-card'>
                  <Card.Img
                  className='img-fluid'
                    src={feature.img}
                  />
                  <h4>{feature.name}</h4>
                  <p>{feature.description}</p>
                  <button className='features-card-button'>More</button>
              </Card>
              
            </Col>
          ))}
        </Row>
        </Container>
        </div>
    );
};

export default Features;