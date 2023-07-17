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
  
    // Fetch the customer ID from the backend
    fetch('http://127.0.0.1:5000/customers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch customer data');
        }
      })
      .then(customerData => {
        if (customerData.length > 0) {
          const customer_id = customerData[0].id; // Assuming the customer ID is in the first item of the response
          const saleData = {
            customer_id: customer_id,
            drink_id: cart[0].id
          };
  
          // Create a new sale in the backend
          fetch('http://127.0.0.1:5000/sales', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(saleData)
          })
            .then(response => {
              if (response.ok) {
                // Sale created successfully
                // alert('Sale created successfully!');
              } else {
                throw new Error('Failed to create sale');
              }
            })
            .catch(error => {
              console.error(error);
              alert('Failed to create sale');
            });
        } else {
          throw new Error('No customer found');
        }
      })
      .catch(error => {
        console.error(error);
        alert('Failed to fetch customer data');
      });
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
