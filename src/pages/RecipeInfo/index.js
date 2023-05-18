/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { findFlagUrlByCountryName } from 'country-flags-svg';

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
    <div>
      <h2>{recipe?.name}</h2>
      <img
        src={recipe?.imageUrl}
        alt={recipe?.name}
        style={{ width: '200px' }}
      />
      <img
        src={findFlagUrlByCountryName(recipe?.country ?? '')}
        alt={recipe?.country}
        style={{ width: '100px' }}
      />
      <div>
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
