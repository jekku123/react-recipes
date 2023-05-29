import React from 'react';
import { Link } from 'react-router-dom';
import classes from './index.module.css';

const Card = ({ title, content, path, link }) => {
    return (
        <div className={classes.card}>
            <h4>{title}</h4>
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
