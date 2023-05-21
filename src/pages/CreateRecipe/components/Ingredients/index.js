import Button from '../../../../UI/Button';
import Input from '../Input';
import classes from './index.module.css';

const Ingredients = ({
    ingredients,
    handler,
    insertObjectToArray,
    removeObjectFromArray,
    errors,
}) => {
    return (
        <div className={classes.container}>
            <label className={classes.label}>Ingredients</label>
            <br />
            <br />

            {ingredients.map((row, i) => (
                <div className={classes.ingredients} key={row.id}>
                    <Input
                        label='Quantity'
                        name='quantity'
                        handler={(e) => handler(e, 'ingredients', 'quantity')}
                        value={row.quantity}
                        idx={row.id}
                        size='sm'
                        errors={errors[i].quantity}
                    />
                    <Input
                        label='Ingredient'
                        name='ingredient'
                        handler={(e) => handler(e, 'ingredients', 'ingredient')}
                        value={row.ingredient}
                        idx={row.id}
                        size='sm'
                        errors={errors[i].ingredient}
                    />
                    {/* UNCOMMENT TO GET DELETE BUTTON 
                     <div>
                        <Button
                            text='Remove'
                            idx={row.id}
                            handler={(e) =>
                                removeObjectFromArray(e, 'ingredients')
                            }
                        />
                    </div> */}
                </div>
            ))}
            <Button
                text='Add another'
                handler={() => {
                    insertObjectToArray('ingredients', [
                        'quantity',
                        'ingredient',
                    ]);
                }}
            />
            <br />
        </div>
    );
};

export default Ingredients;
