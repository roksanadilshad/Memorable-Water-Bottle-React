import React from 'react';
import './Bottle.css'

const Bottle = ({bottle}) => {
    console.log(bottle);
    
    const {img,name, price, quantity, ratings, shipping, stok } = bottle;
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h4>name:{name}</h4>
            <p>price:{price} </p>
            <p>Shipping:{shipping} </p>
            <p>Stok:{stok} </p>
            <p>Quantity:{quantity} </p>
            <p>Ratings:{ratings} </p>
            <p></p>
            
        </div>
    );
};

export default Bottle;