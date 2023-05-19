import { useState } from 'react';
import RecipeCard from '../../components/RecipeCard';
import useAxios from '../../hooks/useAxios';
const { url } = require('../../config/api.json');

const RecipeList = () => {
  const [searchInput, setSearchInput] = useState('');
  const [data, isLoading] = useAxios(url);

  return isLoading ? (
    <p>Loading..</p>
  ) : (
    <>
      <input onChange={(e) => setSearchInput(e.target.value)} />
      <div>
        <h2>Our recipes</h2>
        {data
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
