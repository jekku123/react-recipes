import React from 'react';
import { Link } from 'react-router-dom';
import classes from './index.module.css';
import Button from '../../UI/Button';

const RecipeCard = ({ name, url, country }) => {
    return (
        <div className={classes.card}>
            <img src={url} className={classes.image} alt={name} />
            <img
                className={classes.flag}
                src={`https://flagsapi.com/${country}/shiny/64.png`}
                alt={country}
            />
            <div className={classes.info}>
                <h3>{name}</h3>
                <Link to={name}>
                    <Button text='See more' />
                </Link>
            </div>
        </div>
    );
};

export default RecipeCard;
