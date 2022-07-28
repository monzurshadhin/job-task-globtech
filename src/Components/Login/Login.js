import React from 'react';


import '../Login/Login.css'
import { Link } from "react-router-dom";
import back_button from '../../Images/logout back button.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../Header/Header';

const Login = () => {
  return (
    <div className='login-body row w-100 m-0'>
   <div className='d-block d-lg-none'>
    <Header></Header>
   </div>
      <div className="sidebar col-md-12 col-lg-3 d-none d-lg-block">
        <h4>Globetech <br></br> Company Limited</h4>
        <p>Make yourself digitalized & more effecient</p>
        <div className="back-button">
        <Link to="/"> <img src={back_button} alt="" /></Link>
        </div>
      </div>
      <div className="login-section col-12 col-md-9 d-flex justify-content-center align-items-center">
        <div className="login-box w-sm-100">
          <h4>Welcome</h4>
          <p>Sign in to your account</p>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" />
        <i class="far fa-eye"></i>
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