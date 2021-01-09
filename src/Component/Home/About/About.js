import React, { useState } from 'react';
import { Col,Row } from 'react-bootstrap';
import { FaMugHot , FaUtensils , FaMortarPestle , FaDrumstickBite , FaPepperHot ,FaFish } from "react-icons/fa";
import './About.css'
const About = () => {
const [about , setAbout ] = useState(
    [
    {
     id:1,
     icon: <FaMugHot/>,
     title: 'Drinks',
     description: 'ipsum dolor sit amet, consectetur  adipisicing elit. Quisquam, temporibus'
    },
    {
    id:2,
    icon: <FaUtensils/>,
    title: 'Healthy Food',
    description: 'ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, temporibus!'
    
    },
    {
    id:3,
    icon: <FaMortarPestle/>,
    title: 'Organic Food',
    description: 'ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, temporibus!'
    },
    {
    id:4,
    icon: <FaDrumstickBite/>,
    title: 'White Meat',
    description: 'ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, temporibus!'
    },
    {
    id:5,
    icon: <FaFish/>,
    title: '',
    description:'ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, temporibus!'
    },
    {
    id:6,
    icon: <FaPepperHot/>,
    title: 'Sea Food',
    description: 'ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, temporibus!'
    },
])
    return (
        <section id="about">
        <div>
       <h2 className="title-text">About Us</h2>
      </div>
        <div className="about-center">
        <Row>
            {
            about.map((pd ,index )=> {
           return (

              
                    <Col md={4}>
                    <article key={index} className="about">
                    <div className="about-icon">
                    <span>{pd.icon}</span>
                    </div>
                    <div className="about-text">
                    <h2  className="about-subtitle" >{pd.title}</h2>
                    <p className="about-info">{pd.description}</p>
                    </div>
                     </article>
                    </Col>
              

           );
            })}
              </Row>
        </div>
    </section>
    );
};

export default About;