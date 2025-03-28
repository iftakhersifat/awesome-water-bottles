const  getCartFromLS =()=>{
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        const store = JSON.parse(storedCart);
        return store;
    }
    return [];
}
const addItem =(id)=>{
    const getCart = getCartFromLS();
    const newCart = [...getCart, id];

    // save new cart to the LS
    saveCartToLS(newCart);
}
const saveCartToLS=(cart)=>{
    const cartStringify =JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}

export {
    getCartFromLS, addItem
}