import React from 'react';
import './Bottle.css'

const Bottle = ({bottle, handleCart}) => {
    // console.log(bottle);
    const {img, name, price, stock, ratings}=bottle;

    const handleAddedToCart =()=>{
        handleCart(bottle)
    }
    return (
        <div className='bottle'>
            <img src={img} />
            <h1>{name}</h1>
            <p>${price}</p>
            <p>Ratings: {`⭐ ${ratings}`}</p>
            <h4>{stock} remaining</h4>
            <button onClick={handleAddedToCart}>{`🛒 Buy Now`}</button>
        </div>
    );
};

export default Bottle;