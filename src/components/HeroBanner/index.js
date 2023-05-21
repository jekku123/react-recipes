import React from 'react';
import { Link } from 'react-router-dom';
import classes from './index.module.css';
import Button from '../../UI/Button';

const HeroBanner = () => {
    return (
        <div className={classes.banner}>
            <h2>Recipes App</h2>
            <p>
                Recipes App which was the final task to complete React baby
                course for REACT23K group in Business College Helsinki
                Full-Stack Developer program
            </p>
            <Link to='/recipes'>
                <Button text='Browse recipes' />
            </Link>
        </div>
    );
};

export default HeroBanner;
