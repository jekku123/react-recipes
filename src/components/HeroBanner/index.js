import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div>
      <h2>Recipes App</h2>
      <p>
        Recipes App which was the final task to complete React baby course for
        REACT23K group in Business College Helsinki Full-Stack Developer program
      </p>
      <Link to='/recipes'>
        <button>Browse recipes</button>
      </Link>
    </div>
  );
};

export default HeroBanner;
