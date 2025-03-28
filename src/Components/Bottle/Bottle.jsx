import React from 'react';

const Bottle = ({bottle}) => {
    console.log(bottle);
    const {img}=bottle;
    return (
        <div>
            <img src={img} />
        </div>
    );
};

export default Bottle;