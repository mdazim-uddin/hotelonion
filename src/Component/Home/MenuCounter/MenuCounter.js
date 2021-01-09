import React, { useState } from 'react';
import { Col,Row } from 'react-bootstrap';
import './MenuCounter.css'
import { FaCloudMeatball , FaFolder , FaPizzaSlice , FaMapPin} from "react-icons/fa";
const MenuCounter = () => {

const [counter , setCounter ] = useState([
    {
        id:1,
        icon: <FaCloudMeatball/>,
        title: 'Meat dishes',
        span: 50,
       },
       {
       id:2,
       icon: <FaFolder/>,
       title: 'Cheese Variations',
       span: 30,  
       },
       {
       id:3,
       icon: <FaPizzaSlice/>,
       title: 'Pizzas',
       span: 25, 
       },
       {
       id:4,
       icon: <FaMapPin/>,
       title: 'Desserts',
       span: 40, 
       },
])
    return (
        <section id="numbers">
                <div className="about-center">
                <Row>
                 {
              counter.map((pd ,index )=> {
              return (  
                    <Col md={3}>
                    <article key={index} className="number">
                    <div className="number-icon">
                    <span>{pd.icon}</span>
                    </div>
                    <div className="number-text">
                    <p className="about-info">{pd.span}</p>
                    <h2  className="about-subtitle" >{pd.title}</h2>
                    
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

export default MenuCounter;