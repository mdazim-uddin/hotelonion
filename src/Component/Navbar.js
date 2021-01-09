import React from 'react';
import './Navbar.css';
import { Col, Container, Row } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../logo2.png'
const Navbar = () => {
    return (

       <div  className="header">
           <section>
        <div className="logo-area">
            <Container>
                <Row>
                    <Col md={2}>
           <Link to="/">
           <img src={logo} alt="logo" className="img-fluid"/>
           </Link>
                    </Col>
                    <Col md={10}>
                        <div className="logo-area-right">
                           <div className="logo-icon">
                           <FaShoppingCart/>
                           </div>
                             <div className="login-area">
                            <div className="input-1">
                            <input type="submit" value="Login" />
                            </div>
                           <div className="input-2">
                             <input type="submit" value="Sign up"/>
                           </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        
    </section>
         <div className="hero">
            <h1 className="title">Food For Health</h1>
            <a href="#" className="hero-button pulsate">Book a table</a>
       </div>
       </div>
    );
};

export default Navbar;