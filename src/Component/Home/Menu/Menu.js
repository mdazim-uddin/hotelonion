import React from 'react';
import img from '../../../image/8.jpeg'
import './Menu.css'
const Menu = () => {
    return (
        <div>
        <section className="menu" id="menu">
       <article className="menu-image"></article>
       <article className="menu-text">
           <div className="menu-text-center">
               <h1>Our Menu</h1>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing 
                elit. Aut omnis nam iusto praesentium inventore vitae 
                esse tempora repellendus.</p>
                <a href="#">Explore</a>
           </div>
       </article>
   </section>
   {/* Social Icons */}
   <section id="social-icons">
       <a href="#"><i class="fab fa-facebook facebook"></i></a>
       <a href="#"><i class="fab fa-twitter twitter"></i></a>
       <a href="#"><i class="fab fa-instagram instagram"></i></a>
       <a href="#"><i class="fab fa-google-plus plus"></i></a>
   </section>
   {/* End of Social Icons */}
        </div>
    );
};

export default Menu;