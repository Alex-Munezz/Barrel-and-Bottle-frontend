import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  const [drinks, setDrinks] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [updatedFields, setUpdatedFields] = useState({});

  useEffect(() => {
    fetchDrinks();
  }, []);

  const fetchDrinks = () => {
    fetch('http://127.0.0.1:5000/drinks')
      .then(response => response.json())
      .then(drinks => setDrinks(drinks))
      .catch(error => console.error(error));
  };


  const deleteDrink = (drinkId) => {
    fetch(`http://127.0.0.1:5000/drinks/${drinkId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          fetchDrinks();
        } else {
          throw new Error('Failed to delete drink');
        }
      })
      .catch(error => console.error(error));
  };

  const showUpdateForm = (drink) => {
    setSelectedDrink(drink);
    setUpdatedFields(drink);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedFields(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const updateDrink = () => {
    fetch(`http://127.0.0.1:5000/drinks/${selectedDrink.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedFields)
    })
      .then(response => {
        if (response.ok) {
          return response.json(); 
        } else {
          throw new Error('Failed to update drink');
        }
      })
      .then(updatedDrink => {
        const updatedDrinks = drinks.map(drink => {
          if (drink.id === updatedDrink.id) {
            return updatedDrink;
          } else {
            return drink;
          }
        });

        setDrinks(updatedDrinks);
        setSelectedDrink(null);
        setUpdatedFields({}); 
      })
      .catch(error => console.error(error));
  };

  return (
    <div className='container'>
             <div className="h1">
         <h1>Hey, welcome Admin</h1></div>
      <Link to="/LiquorList">Liquors Page</Link>
      <h2>Where every sip tells a story.</h2>
      <div className='row'>
        {drinks.map(drink => (
          <div className='column' key={drink.id}>
            <img src={drink.cover} alt={drink.cover}></img>
            <p>Name: {drink.name}</p>
            <p>Percentage: {drink.percentage}</p>
            <p>Brewery: {drink.brewery}</p>
            <p>Price: {drink.price}</p>
            {selectedDrink && selectedDrink.id === drink.id ? (
              <div>
                <input type="text" name="name" value={updatedFields.name || ''} onChange={handleInputChange} />
                <input type="text" name="percentage" value={updatedFields.percentage || ''} onChange={handleInputChange} />
                <input type="text" name="brewery" value={updatedFields.brewery || ''} onChange={handleInputChange} />
                <input type="text" name="price" value={updatedFields.price || ''} onChange={handleInputChange} />
                <button onClick={updateDrink}>Save</button>
              </div>
            ) : (
              <div>
                <button onClick={() => deleteDrink(drink.id)}>Delete Drink</button>
                <button onClick={() => showUpdateForm(drink)}>Update Drink</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;