import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './cart';
import { Twemoji } from 'react-emoji-render';

function LiquorList() {
  const [drinks, setDrinks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchDrinks();
  }, []);

  const fetchDrinks = () => {
    fetch('http://127.0.0.1:5555/drinks')
      .then(response => response.json())
      .then(drinks => setDrinks(drinks))
      .catch(error => console.error(error));
  };

  const addToCart = (drink) => {
    setCart([...cart, drink]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <div className='container'>
      <div className="h1">
        <h1>Welcome to Barrel & Bottle <Twemoji text="🥂" /></h1>
      </div>
      <h2>Where every sip tells a story.</h2>
      <div className='row'>
        {drinks.map(drink => (
          <div className='column' key={drink.id}>
            <img src={drink.cover} alt={drink.cover}></img>
            <p>Name: {drink.name}</p>
            <p>Percentage: {drink.percentage}</p>
            <p>Brewery: {drink.brewery}</p>
            <p>Price: {drink.price}</p>
            <div>
              <button onClick={() => addToCart(drink)}>Buy Drink</button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/Admin">Admin Page</Link>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default LiquorList;
