import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Twemoji } from 'react-emoji-render';
import Cart from './cart';

function LiquorList() {
  const [drinks, setDrinks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchDrinks();
  }, []);

  const fetchDrinks = () => {
    fetch('http://127.0.0.1:5000/drinks')
      .then(response => response.json())
      .then(drinks => setDrinks(drinks))
      .catch(error => console.error(error));
  };

  const handleDeleteDrink = (DrinkId) => {
    fetch(`http://127.0.0.1:5000/drinks/${DrinkId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 204) {
          fetchDrinks();
        } else {
          console.error('Error deleting drink');
        }
      })
      .catch((error) => {
        console.error('Error deleting drink:', error);
      });
  };

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
      <h1>Welcome to Barrel & Bottle <Twemoji text="🥂" /></h1>
      <Link to="/Admin">Admin Page</Link>

      <div className='row'>
        {drinks.map(drink => (
          <div className='column' key={drink.id}>
            <img src={drink.cover} alt={drink.cover}></img>
            <p>Name: {drink.name}</p>
            <p>Percentage: {drink.percentage}</p>
            <p>Brewerie: {drink.breweries}</p>
            <p>Price: {drink.price}</p>
            <button onClick={() => addToCart(drink)}>Buy Drink</button>
            <button
              className="delete-button"
              onClick={() => handleDeleteDrink(drink.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default LiquorList;
