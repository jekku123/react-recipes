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

/* UNCOMMENT TO GET DELETE BUTTON 
                     <div>
                        <Button
                            text='Remove'
                            idx={row.id}
                            handler={(e) =>
                                removeObjectFromArray(e, 'ingredients')
                            }
                        />
                    </div> */
