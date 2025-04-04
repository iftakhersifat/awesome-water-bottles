import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import "./Bottles.css"
import { addItem, getCartFromLS } from '../LocalStorage/Localstorage';

const Bottles = ({bottlesPromise}) => {
    const bottles=use(bottlesPromise);
    // console.log(bottles);

    const storedCart = [];
    // useEffect --> load getCartFromLS
    useEffect(()=>{
        const storedCartId = getCartFromLS();
        // console.log(storedCartId, bottles);

        for(const id of storedCartId){
            console.log(id)
            const cartBottle =bottles.find(bottle=>bottle.id===id);
            if(cartBottle){
                storedCart.push(cartBottle);
            }
            // console.log(storedCart)
            setAddedCart(storedCart)
        }
    }, [bottles])
    
    //added to cart:
    const [addedCart, setAddedCart] = useState([]);
    const handleCart=(bottle)=>{
        const countCart = [...addedCart, bottle];
        setAddedCart(countCart);

        // save the bottle id
        addItem(bottle.id);
    }


    // show bottles
    const [showBottles, setShowBottles] = useState([]);
    const handleShowBottles =(bottle)=>{
        const showBottle = [...showBottles, bottle];
        setShowBottles(showBottle);
    }

    // remove cart
    const handleRemoveCart = (id) => {
        // Remove from addedCart
        const updatedCart = addedCart.filter(bottle => bottle.id !== id);
        setAddedCart(updatedCart);
    
        // Remove from showBottles
        const updatedShowBottles = showBottles.filter(bottle => bottle.id !== id);
        setShowBottles(updatedShowBottles);
    };
    

    return (
        <div className='bottles-div'>
            <h1>Bottles: {bottles.length}</h1>
            <h4>Added to Cart : {addedCart.length}</h4>
            {
                showBottles.map(bottle=> <div>
                    <img className='img' src={bottle.img}></img> 
                    <button onClick={() => handleRemoveCart(bottle.id)}>x</button>
                    </div>)
            }
            <div className='bottles'>
            {
                bottles.map(bottle=> <Bottle 
                    key={bottle.id} 
                    handleCart={handleCart}
                    handleShowBottles={handleShowBottles}
                    bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;