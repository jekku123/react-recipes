import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import bannerVideo from '../../assets/videos/foodvideo.mp4';
import classes from './index.module.css';

const HeroBanner = () => {
    return (
        <div className={classes.container}>
            <video autoPlay muted loop src={bannerVideo}></video>
            <div className={classes.content}>
                <h2>Tasty Food</h2>
                <p>
                    Tasty food is a recipes app which was the final task to
                    complete React baby course for REACT23K group in Business
                    College Helsinki Full-Stack Developer program
                </p>
                <Link to='/recipes'>
                    <Button text='Browse recipes' />
                </Link>
            </div>
        </div>
    );
};

export default HeroBanner;
