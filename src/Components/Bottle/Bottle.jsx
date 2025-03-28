import React from 'react';
import './Bottle.css'

const Bottle = ({bottle}) => {
    console.log(bottle);
    const {img, name, price, stock, ratings}=bottle;
    return (
        <div className='bottle'>
            <img src={img} />
            <h1>{name}</h1>
            <p>${price}</p>
            <p>Ratings: {`⭐ ${ratings}`}</p>
            <h4>{stock} remaining</h4>
        </div>
    );
};

export default Bottle;