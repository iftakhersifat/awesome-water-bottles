import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import "./Bottles.css"
import { addItem } from '../LocalStorage/Localstorage';

const Bottles = ({bottlesPromise}) => {
    const bottles=use(bottlesPromise);
    console.log(bottles);
    
    //added to cart:
    const [addedCart, setAddedCart] = useState([]);
    const handleCart=(bottle)=>{
        const countCart = [...addedCart, bottle];
        setAddedCart(countCart);

        // save the bottle id
        addItem(bottle.id);
    }
    return (
        <div className='bottles-div'>
            <h1>Bottles: {bottles.length}</h1>
            <h4>Added to Cart : {addedCart.length}</h4>
            <div className='bottles'>
            {
                bottles.map(bottle=> <Bottle 
                    key={bottle.id} 
                    handleCart={handleCart}
                    bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;