/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../../components/RecipeCard';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get('http://localhost:3001/recipes');
      setRecipes(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log('Error: ' + err);
    }
  };

  return isLoading ? (
    <p>Loading..</p>
  ) : (
    <>
      <input onChange={(e) => setSearchInput(e.target.value)} />
      <div className='cards'>
        <h2>Our recipes</h2>
        {recipes
          .filter((recipe) => recipe.name.toLowerCase().includes(searchInput))
          .map((recipe) => (
            <RecipeCard
              key={recipe.id}
              name={recipe.name}
              country={recipe.country}
              url={recipe.imageUrl}
            />
          ))}
      </div>
    </>
  );
};

export default RecipeList;
