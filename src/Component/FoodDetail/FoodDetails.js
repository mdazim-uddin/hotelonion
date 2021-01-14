// import React, { useContext, useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import { Link, useParams } from 'react-router-dom';
// import { FaShoppingCart,FaMinus,FaPlus } from "react-icons/fa";
// import foodData from '../FoodData/FoodData';
// import './FoodDetails.css'
// // import AddCart from '../AddCart/AddCart';
// import { UserContext } from '../../App';
// const FoodDetails = () => {
// const {Id} = useParams()
// console.log(Id)
// const selectedFood=foodData.find(food=>food.id===parseInt(Id))
// const {foodImage, foodName,price, foodDetails,id, detail} = selectedFood
// console.log(selectedFood)
// const [value, setValue] = useState(1)



// const {data} = useContext(UserContext)
// const [cart,setCart] = data

//     return (
//         <div>
//             <Container>
//             <Row>
//                 <Col md={6}>
//                    <div className="food-detail-area">
//                    <div className="food-detail-text">
//                         <p>{foodDetails}</p>
//                     </div>
//                     <div className="food-detail-price">
//                         <span>{price}</span>
//                         <FaMinus onClick={() => {if (value > 1) setValue(value - 1)}} className="mainus" />
//                         <input value={value}
//                          type="text" onChange={(e) =>
//                          setValue(e.target.value)} className="food-detail-input"/>
//                         <FaPlus onClick={() => setValue(value + 1)} className="plus"/>
//                     </div>
//                     <div className="food-detail-btn"> 
//                     <Link to="/cart">
//                     <button className=""  onClick={ ()=> setCart([...cart,selectedFood])} >
//                   <FaShoppingCart  className="food-icon"/>
//                       add
//                       </button>
//                     </Link>
//                      </div>
//                    </div>
//                 </Col>
//                 <Col md={4}>
//                 <div className="food-detail-card">
//                 <img src={foodImage} alt="" className="img-fluid" className="food-detail-img"/>
//                 </div>
//                 </Col>
//             </Row>
//             </Container>
//         </div>
//     );
// };

// export default FoodDetails;
import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FaShoppingCart,FaMinus,FaPlus } from "react-icons/fa";
import foodData from '../FoodData/FoodData';
import './FoodDetails.css'
import { UserContext } from '../../App';
const FoodDetails = () => {
const {Id} = useParams()
console.log(Id)
const selectedFood=foodData.find(food=>food.id===parseInt(Id))
const {foodImage, foodName,price, foodDetails,id, detail} = selectedFood

const [value, setValue] = useState(1)
const {data} = useContext(UserContext)
const [cart,setCart] = data
return (
    <div>
        <Container>
        <Row>
            <Col md={6}>
               <div className="food-detail-area">
               <div className="food-detail-text">
                    <p>{foodDetails}</p>
                </div>
                <div className="food-detail-price">
                         <span>{price}</span>
                         <FaMinus onClick={() => {if (value > 1) setValue(value - 1)}} className="mainus" />
                         <input value={value}
                         type="text" onChange={(e) =>
                         setValue(e.target.value)} className="food-detail-input"/>
                        <FaPlus onClick={() => setValue(value + 1)} className="plus"/>
                    </div>
                    <div className="food-detail-btn"> 
                    <Link to="/cart">
                    <button className="" onClick={ ()=> setCart([...cart,selectedFood])} >
                  <FaShoppingCart  className="food-icon"/>
                      add
                      </button>
                    </Link>
                     </div>
                   </div>
                </Col>
                <Col md={4}>
                <div className="food-detail-card">
                <img src={foodImage} alt="" className="img-fluid" className="food-detail-img"/>
                </div>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default FoodDetails;

