import React from 'react';
import './Bottle.css'

const Bottle = ({bottle}) => {
    console.log(bottle);
    const {img, name, price}=bottle;
    return (
        <div className='bottle'>
            <img src={img} />
            <h1>{name}</h1>
            <p>${price}</p>
        </div>
    );
};

export default Bottle;