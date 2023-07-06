import React, { useEffect, useState } from 'react';
import Cart from './cart';



function LiquorList() {
  const [drinks, setDrinks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/drinks')
      .then(response => response.json())
      .then(drinks => setDrinks(drinks))
      .catch(error => console.error(error));
  }, []);

  const addToCart = (drink) => {
    setCart([...cart, drink]);
  };
  const removeFromCart = (itemId) => {
    // Remove the item from the cart
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <div className='container'>
      <h2>Where every sip tells a story.</h2>
      <div className='row'>
        {drinks.map(drink => (
          <div className='column' key={drink.id}>
            <img src={drink.cover} alt={drink.cover}></img>
            <p>Name: {drink.name}</p>
            <p>Percentage: {drink.percentage}</p>
            <p>Brewerie: {drink.breweries}</p>
            <p>Price: {drink.price}</p>
            <button onClick={() => addToCart(drink)}>Buy Drink</button>
          </div>
        ))}
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} /><br></br>
    </div>
  );
}

export default LiquorList;
