import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, content, path, link }) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{content}</p>
      {path.startsWith('http') ? (
        <a href={path} target='_blank' rel='noreferrer'>
          {link}
        </a>
      ) : (
        <Link to={path}>{link}</Link>
      )}
    </div>
  );
};

export default Card;
