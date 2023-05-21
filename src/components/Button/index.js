import React from 'react';
import classes from './index.module.css';

const Button = ({ text, type = 'button', idx = undefined, handler }) => {
    return (
        <button
            className={classes.btn}
            type={type}
            data-idx={idx}
            onClick={handler}
        >
            {text}
        </button>
    );
};

export default Button;
