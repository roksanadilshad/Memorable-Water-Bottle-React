import React from 'react';
import './Bottle.css'

const Bottle = ({bottle,  handlerBottle}) => {
    //console.log(bottle);
    
    const {img,name, price, quantity, ratings, shipping, stock ,seller} = bottle;
    return (
        <div className='card'>
            <h2>{seller}</h2>
            <img src={img} alt="" className='bottle-img'/>
            <h4>Name:{name}</h4>
            <p>price:{price} </p>
            <p>Shipping:{shipping} </p>
            <p>Stok:{stock} </p>
            <p>Quantity:{quantity} </p>
            <p>Ratings:{ratings} </p>
            <button onClick={() => {handlerBottle(bottle)}}>Buy Now</button>
            <p></p>
            
        </div>
    );
};

export default Bottle;