import React from 'react';
import './cart.css';

function Cart({ cart, removeFromCart }) {
  // Calculate the total price
  const totalPrice = cart.reduce((total, drink) => total + drink.price, 0);

  return (
    <div>
      <fieldset>
        <h2>Cart</h2>
        <ul>
          {cart.map(drink => (
            <li key={drink.id}>
              <img src={drink.cover} alt={drink.name} />
              <div>
                <p>{drink.name}</p>
                <button onClick={() => removeFromCart(drink.id)}>Remove from Cart</button>
              </div><br></br>
            </li>
          ))}
        </ul>
        <p>Number of items: {cart.length}</p>
        <p>Total Price Kshs: {totalPrice.toFixed(2)}</p>
      </fieldset>
    </div>
  );
}

export default Cart;
