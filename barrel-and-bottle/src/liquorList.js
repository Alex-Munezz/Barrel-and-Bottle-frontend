import React, { useEffect, useState } from 'react';

function DrinksList() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/drinks')
      .then(response => response.json())
      .then(drinks => setDrinks(drinks))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Drinks</h1>
      <ul>
        {drinks.map(drink => (
          <li key={drink.id}>
            <p>No.: {drink.id}</p>
            <img src={drink.cover} alt={drink.cover}></img>
            <p>Name: {drink.name}</p>
            <p>Percentage: {drink.percentage}</p>
            <p>Brewerie: {drink.breweries}</p>
            <p>Price: {drink.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DrinksList;
