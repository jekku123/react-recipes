/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router-dom';
import { findFlagUrlByCountryName } from 'country-flags-svg';
import useAxios from '../../hooks/useAxios';
const { url } = require('../../config/api.json');

const RecipeInfo = () => {
  const path = useParams();
  const navigate = useNavigate();
  const [data, isLoading] = useAxios(`${url}?name=${path.name}`);

  return isLoading ? (
    <p>Loading..</p>
  ) : (
    <div>
      <h2>{data.name}</h2>
      <img src={data.imageUrl} alt={data.name} style={{ width: '200px' }} />
      <img
        src={findFlagUrlByCountryName(data.country ?? '')}
        alt={data.country}
        style={{ width: '100px' }}
      />
      <div>
        <h3>Ingredients</h3>
        {data.ingredients?.map((ingredient, i) => (
          <p key={i}>
            {ingredient.quantity} - {ingredient.ingredient}
          </p>
        ))}
      </div>

      <p>Description: {data.description}</p>
      <p>Author: {data.author}</p>
      <p>Preparation: {data.instructions}</p>

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default RecipeInfo;
