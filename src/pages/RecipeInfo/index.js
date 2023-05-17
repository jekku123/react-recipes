/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeInfo = () => {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const path = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:3001/recipes?name=${path.name}`
      );
      setRecipe(res.data[0]);
      setIsLoading(false);
    } catch (err) {
      console.log('Error: ' + err);
    }
  };

  return isLoading ? (
    <p>Loading..</p>
  ) : (
    <div className='recipe-info'>
      <h2 className='recipe-name'>{recipe?.name}</h2>
      <img
        src={recipe?.imageUrl}
        alt={recipe?.name}
        style={{ width: '200px' }}
      />
      <div className='recipe-ingredients'>
        <h3>Ingredients</h3>
        {recipe?.ingredients.map((ingredient, i) => (
          <p key={i}>
            {ingredient.quantity} - {ingredient.ingredient}
          </p>
        ))}
      </div>

      <p>Description: {recipe?.description}</p>
      <p>Author: {recipe?.author}</p>
      <p>Preparation: {recipe?.instructions}</p>

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default RecipeInfo;
