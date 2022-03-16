import React from 'react';
import './main.scss'
import iphone from '../../assets/img/iphone.png'

const Banner = () => {
    return (
            <section className='banner'>
                <div className="container banner__container">
                   <h1 className='banner__title'>
                   Аксессуары для <br /> Iphone 13 Pro Max
                   </h1>
                   <img src={iphone} alt="" />
                </div>
            </section>
    );
}

export default Banner;
