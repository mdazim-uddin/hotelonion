import React, { useContext } from 'react';
import {Row, Col, Container } from 'react-bootstrap';
import {FaMinus,FaPlus } from "react-icons/fa";
import { UserContext } from '../../App';
import './AddCart.css'
const AddCart = () => {
const {data} = useContext(UserContext)
const [cart,setCart] = data
console.log(cart)

const totalPrice = cart.reduce((total , prd) => total + prd.price , 0)
 let shipping = 0;

 if(totalPrice > 15){
   shipping = 4.99 ;
 }
 else if(totalPrice > 0) {
  shipping = 12.99 ;
 }
  return (
   <>
    <Container>
    <Row>
    <Col md={6}>
     <div className="cart-left-area">
     <div className="cart-left-area">
     <h2>Edit Delivery Details</h2>
     <div className="common-border"></div>
     </div>

     <div className="cart-left-input">
      <from>
      <input type="text" placeholder=" Delivery to door"  className="form-control" />
      <input type="text" placeholder=" 107 RD NO 12 "  className="form-control"/>
      <input type="text" placeholder=" Flat, Suite or flor"  className="form-control" />
      <input type="text" placeholder=" Azim Uddin"  className="form-control"/>
      <textarea  className="form-control"
       placeholder="Add Delivery Instruction " rows="3"></textarea>
      <button type="submit" className="btn">Save and Continue</button>
      </from>
     </div>
     </div>
    </Col> 
   
                 
                    <Col md={6}>
                    {
                    cart.map((pd ,index )=> {
                   return (
                    <article key={index} className="">
                    <div className="final-order-aria">
              <h5 className="resturant-name">From <span>Gulshan Plazza GPR</span> </h5>
              <h6>Arriving in 20-30 minutes</h6>
              <div className="orders-items-aria">
                </div>
                </div>
                <Row>
                  <Col md={2}>
                  <img src={pd.foodImage} alt="" className="img-fluid" />
                  </Col>
                  <Col md={6}>
                   <div className="cart-item">
                   <h1>{pd.foodName}</h1>
                    <span>{pd.price}</span>
                   </div>
                  </Col>
                  <Col md={4}>
                  <div className="food-detail-price">
                         <FaMinus className="mainus" />
                         <input  type="text"  className="food-cart-input"/>
                        <FaPlus className="plus"/>
                    </div>
  
                  </Col>
                </Row>
                <div className="status">
                    <h4>item order {cart.length}</h4>
                    <p><span>Shipping Cost : {shipping}</span></p>
                    <h5>Total Price =  {totalPrice }</h5>
                    </div>
                    <button className="btn">Place Order</button>
                    </article>
                   
                   );
                    })} 
                     </Col>
  </Row>
    </Container>
   </>
  );
};

export default AddCart;