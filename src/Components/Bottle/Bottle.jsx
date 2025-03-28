import React from 'react';
import './Bottle.css'

const Bottle = ({bottle}) => {
    console.log(bottle);
    const {img}=bottle;
    return (
        <div className='bottle'>
            <img src={img} />
        </div>
    );
};

export default Bottle;