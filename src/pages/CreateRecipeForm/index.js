import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import CountrySelectList from '../../UI/Form/components/CountrySelectList';

const CreateRecipeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    country: '',
    description: '',
    imagepath: '',
    ingredients: [{ id: uuid(), quantity: '', ingredient: '' }],
    instructions: '',
  });

  const removeIngredientRow = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      ingredients: prevData.ingredients.filter(
        (row) => e.target.dataset.idx !== row.id
      ),
    }));
  };

  const insertIngredientRow = () => {
    setFormData((prevData) => ({
      ...prevData,
      ingredients: prevData.ingredients.concat([
        { id: uuid(), quantity: '', ingredient: '' },
      ]),
    }));
  };

  const handleFormChanges = (e) => {
    const { name, value, dataset } = e.target;
    const { idx } = dataset;
    if (name === 'ingredient' || name === 'quantity') {
      setFormData((prevData) => ({
        ...prevData,
        ingredients: prevData.ingredients.map((ingredientsObject) => {
          if (ingredientsObject.id === idx) {
            return {
              ...ingredientsObject,
              [name]: value,
            };
          }
          return ingredientsObject;
        }),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/recipes', {
        id: uuid(),
        ...formData,
      });
      setFormData({
        name: '',
        author: '',
        country: '',
        description: '',
        imagepath: '',
        ingredients: [],
        instructions: '',
      });
      window.alert('Recipe posted');
    } catch (err) {
      console.log('Error: ' + err);
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={handleFormChanges}
            value={formData.name}
          />
        </div>

        <div>
          <label htmlFor='author'>Author</label>
          <input
            type='text'
            id='author'
            name='author'
            onChange={handleFormChanges}
            value={formData.author}
          />
        </div>

        <CountrySelectList
          country={formData.country}
          handler={handleFormChanges}
        />

        <div>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            id='description'
            name='description'
            onChange={handleFormChanges}
            value={formData.description}
          />
        </div>

        <div>
          <label htmlFor='imagepath'>Image</label>
          <input
            type='text'
            id='imagepath'
            name='imagepath'
            onChange={handleFormChanges}
            value={formData.imagepath}
          />
        </div>

        <div>
          <label>Ingredients</label>
          {formData.ingredients.map((row) => (
            <div key={row.id}>
              <label htmlFor='quantity'>Quantity</label>

              <input
                type='text'
                name='quantity'
                id='quantity'
                data-idx={row.id}
                onChange={handleFormChanges}
                value={row.quantity}
              />

              <label htmlFor='ingredient'>Ingredient</label>
              <input
                type='text'
                name='ingredient'
                id='ingredient'
                data-idx={row.id}
                onChange={handleFormChanges}
                value={row.ingredient}
              />
              <button
                type='button'
                data-idx={row.id}
                onClick={removeIngredientRow}
              >
                Remove
              </button>
            </div>
          ))}

          <button type='button' onClick={insertIngredientRow}>
            Add more
          </button>
        </div>

        <div>
          <label htmlFor='instructions'>Instructions</label>
          <textarea
            id='instructions'
            name='instructions'
            onChange={handleFormChanges}
            value={formData.instructions}
            rows='4'
          ></textarea>
        </div>

        <button type='submit'>Post recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipeForm;
