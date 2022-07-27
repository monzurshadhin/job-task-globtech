import React from 'react';


import '../Login/Login.css'
import { Link } from "react-router-dom";
import back_button from '../../Images/logout back button.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  return (
    <div className='d-flex'>
   
      <div className="sidebar">
        <h4>Globetech <br></br> Company Limited</h4>
        <p>Make yourself digitalized & more effecient</p>
        <div className="back-button">
        <Link to="/"> <img src={back_button} alt="" /></Link>
        </div>
      </div>
      <div className="login-section">
        <div className="login-box">
          <h4>Welcome</h4>
          <p>Sign in to your account</p>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button className='login-btn' type="submit">
        Login
      </Button>
    </Form>

        </div>
        
      </div>
    </div>
  );
};

export default Login;