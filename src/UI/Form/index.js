import React from 'react';
import classes from './index.module.css';

const Form = ({ children, onSubmit }) => {
    return (
        <div className={classes.formContainer}>
            <form onSubmit={onSubmit}>{children}</form>
        </div>
    );
};

export default Form;
