import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import foodData from '../../FoodData/FoodData';
import './FoodSection.css'
const FoodSection = () => {
    
const [category , setCategory ] = useState("lunch") ;
let foodFilter = foodData.filter(food =>{
    return food.category === category
})
    return (
        <div>
             <div className="fod-btn">
                <button onClick={()=>setCategory("breakfast")}>breakfast</button>
                <button onClick={()=>setCategory("lunch")}>lunch</button>
                <button onClick={()=>setCategory("dinner")}>dinner</button>
            </div>

            <section  id="food">
                 <div>
                    <h2 class="title-text"> Food Fusion</h2>
                 </div>
                <div className="food-container">
                 <Row>
                     {
                    foodFilter.map((pd ,index )=> {
                   return (
                    <Col md={4}>
                    <article key={index} className="food-card">
                    <img src={pd.foodImage} alt="" className="food-img"  />
                    <div class="img-text">
                    <h1>{pd.foodName}</h1>
                    </div>
                    <div class="img-footer">
                  <div class="footer-icon">
                    <i class="fas fa-dollar-sign">25</i>
                  </div>
                    <Link to={`/food/${pd.id}`}>
                    <div class="footer-btn">
                    <button type="button"class="food-btn">Order Now</button>  
                  </div>
                    </Link>
                  </div>
                    </article>
                    <di className="food-text">
                      <span>{pd.detail}</span>
                    </di>
                    </Col>
                   );
                    })}     
                 </Row>
                </div>
            </section>

        </div>
    );
};

export default FoodSection;