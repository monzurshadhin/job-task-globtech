import React from 'react';
import Header from '../Header/Header';
import '../Servieces/Secvices.css'
import useServices from '../../Hooks/useServices';
import { Card, Col, Container, Row } from "react-bootstrap";
import jet from '../../Images/Vector.png'
const Services = () => {
  const {services} = useServices();

  
  return (
    <div className='services-body'>
      <Header></Header>
      <Container>
      <div>
        <img className='service-jet' src={jet} alt="" />
      </div>
      <h2 className='service-title'>SERVICES</h2>
      <h4 className='service-sub-title'>We provides services to our clients</h4>
      <Row xs={1} md={2} lg={3} className="g-4 g-lg-5 my-4" >
          {services.map((service) => (
          
            <Col key={service.id}>
              
              <Card className='card'>
                  <Card.Img
                  className='card-img img-fluid'
                    src={service.img}
                  />
                  <h4>{service.name}</h4>
                  <p>{service.description}</p>
                  <button className='service-card-button'>More</button>
              </Card>
              
            </Col>
          ))}
        </Row>
        </Container>
    </div>
  );
};

export default Services;