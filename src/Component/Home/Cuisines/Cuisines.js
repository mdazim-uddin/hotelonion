import React from 'react';
import './Cuisines.css'
import img1 from '../../../image/img1.jpeg'
import img2 from '../../../image/img2.jpeg'
import img3 from '../../../image/img3.jpeg'
import img4 from '../../../image/img4.jpeg'
import img5 from '../../../image/img5.jpeg'
import img6 from '../../../image/img6.jpeg'
const Cuisines = () => {
    return (
     <section id="gallery">
           <div>
        <h2 class="title-text">Main Cuisines</h2>
     </div>
         <div className="img-content">
            <div className="cuisien-img">
            <img src={img1} alt=""/>
            </div>
            <div className="cuisien-img">
            <img src={img2} alt=""/>
            </div>
            <div className="cuisien-img">
            <img src={img3} alt=""/>
            </div>
            <div className="cuisien-img">
            <img src={img4} alt=""/>
            </div>
            <div className="cuisien-img">
            <img src={img5} alt=""/>
            </div>
            <div className="cuisien-img">
            <img src={img6} alt=""/>
            </div>
         </div>
         <div className="img-content">
            <div className="cuisien-img">
            <img src={img5} alt=""/>
            </div>
            <div className="cuisien-img">
            <img src={img6} alt=""/>
            </div>
            <div className="cuisien-img">
            <img src={img2} alt=""/>
            </div>
            <div className="cuisien-img">
            <img src={img3} alt=""/>
            </div>
            <div className="cuisien-img">
            <img src={img1} alt=""/>
            </div>
            <div className="cuisien-img">
            <img src={img4} alt=""/>
            </div>
         </div>
     </section>
    );
};

export default Cuisines;
