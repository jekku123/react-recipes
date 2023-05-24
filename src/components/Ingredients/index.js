import classes from './index.module.css';

const Ingredients = ({ children }) => {
    return (
        <>
            <label className={classes.label}>Ingredients</label>
            <br />
            <br />
            {children}
            <br />
        </>
    );
};

export default Ingredients;


