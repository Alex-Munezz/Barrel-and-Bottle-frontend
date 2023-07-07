import React, { useState } from 'react';
import './cart.css';

function Cart({ cart, removeFromCart }) {
  const [checkoutMethod, setCheckoutMethod] = useState('');

  // Calculate the total price
  const totalPrice = cart.reduce((total, drink) => total + drink.price, 0);

  const handleCheckout = () => {
    // If no checkout method is selected, display an error message
    if (!checkoutMethod) {
      alert('Please select a checkout method.');
      return;
    }

    // Perform the checkout process based on the selected method
    if (checkoutMethod === 'mpesa') {
      // Perform M-Pesa checkout logic
      alert('M-Pesa checkout successful!');
    } else if (checkoutMethod === 'bank') {
      // Perform bank account checkout logic
      alert('Bank account checkout successful!');
    }

    // Clear the cart by removing all items
    cart.forEach(drink => removeFromCart(drink.id));
  };

  return (
    <div className='cart-container'>
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
        <div>
          <label>
            <input
              type="radio"
              name="checkoutMethod"
              value="mpesa"
              checked={checkoutMethod === 'mpesa'}
              onChange={() => setCheckoutMethod('mpesa')}
            />
            M-Pesa
          </label><br></br>
          <label>
            <input
              type="radio"
              name="checkoutMethod"
              value="bank"
              checked={checkoutMethod === 'bank'}
              onChange={() => setCheckoutMethod('bank')}
            />
            Bank Account
          </label>
        </div>
        <button onClick={handleCheckout}>Checkout</button>
      </fieldset>
    </div>
  );
}

export default Cart;
