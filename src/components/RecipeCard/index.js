import React from 'react';
import { Link } from 'react-router-dom';
import { findFlagUrlByCountryName } from 'country-flags-svg';

const RecipeCard = ({ name, url, country }) => {
  return (
    <div>
      <img src={url} alt={name} style={{ width: '300px' }} />
      <h3>{name}</h3>
      <img
        src={findFlagUrlByCountryName(country)}
        alt={country}
        style={{ width: '100px' }}
      />
      <Link to={name}>See more</Link>
    </div>
  );
};

export default RecipeCard;
