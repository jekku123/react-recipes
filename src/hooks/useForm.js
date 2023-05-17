import { useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const useForm = (init) => {
  const [formData, setFormData] = useState(init);

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
      setFormData(init);
      window.alert('Recipe posted');
    } catch (err) {
      console.log('Error: ' + err);
    }
  };

  return {
    formData,
    handleFormChanges,
    removeIngredientRow,
    insertIngredientRow,
    handleSubmit,
  };
};

export default useForm;
