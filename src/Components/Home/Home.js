import React from 'react';
import img1 from '../../Images/Group 1.png'
import Header from '../Header/Header';
import '../Home/Home.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import vector from '../../Images/Vector.png'



const Home = () => {
  return (

    <div className='home_body'>
   
      <Header></Header>
<Row style={{width:'100%'}}>
  <Col md={6} xs={12} lg={6}>
    <div className="vector_section">
      <img className='vector-img' src={vector} alt="" />
    </div>
      <div className="home_text">
        <h1 className='home-title'>Welcome to <section className='color-text'>Globetech</section>  </h1>
        <p className='home-details'>We are committed to deliver <span className='color-text'>best IT services</span>. Our Consultants have experience in working with clients. We have extensive experience in the software application space and also offer a broad range and depth of technology.</p>
        
      </div>
      <div className="button-section">
        <button className='btn1'>Support us</button>
        <button className='btn2'>Our Mission</button>
        </div>
      </Col>
      <Col md={6} xs={12} lg={6}>
      <img className='home_image' src={img1} alt="" />
      </Col>
      </Row>
     
    </div>
  );
};

export default Home;