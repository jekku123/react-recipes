import axios from 'axios';
import { v4 as uuid } from 'uuid';
import useForm from '../../hooks/useForm';
import Select from '../../components/Select';
import Ingredients from '../../components/Ingredients';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import Form from '../../UI/Form';
import { alertBox } from '../../utils/alert';
import classes from './index.module.css';

const initialValues = {
    name: '',
    author: '',
    country: '',
    description: '',
    imageUrl: '',
    ingredients: [{ id: uuid(), quantity: '', ingredient: '' }],
    instructions: '',
};

const CreateRecipe = () => {
    const {
        formData,
        handleFormChanges,
        removeObjectFromArray,
        insertObjectToArray,
        handleSubmit,
        errors,
    } = useForm(initialValues);

    const submit = async () => {
        try {
            await axios.post('http://localhost:3001/recipes', {
                id: uuid(),
                ...formData,
            });
            alertBox(formData, 'ok');
        } catch (err) {
            alertBox(formData, 'error');
        }
    };

    return (
        <>
            <h2 className={classes.h2}>Add new recipe</h2>
            <Form onSubmit={(e) => handleSubmit(e, submit)}>
                <Input
                    label='Name'
                    name='name'
                    handler={handleFormChanges}
                    value={formData.name}
                    errors={errors.name}
                />
                <Input
                    label='Author'
                    name='author'
                    handler={handleFormChanges}
                    value={formData.author}
                    errors={errors.author}
                />
                <Select
                    label='Choose a country'
                    name='country'
                    handler={handleFormChanges}
                    value={formData.country}
                    errors={errors.country}
                />
                <TextArea
                    label='Description'
                    name='description'
                    handler={handleFormChanges}
                    value={formData.description}
                    errors={errors.description}
                />
                <Input
                    label='Image url'
                    name='imageUrl'
                    handler={handleFormChanges}
                    value={formData.imageUrl}
                    errors={errors.imageUrl}
                />
                <Ingredients>
                    {formData.ingredients.map((row, i) => (
                        <div className={classes.ingredients} key={row.id}>
                            <Input
                                label='Quantity'
                                name='quantity'
                                handler={(e) =>
                                    handleFormChanges(
                                        e,
                                        'ingredients',
                                        'quantity'
                                    )
                                }
                                value={row.quantity}
                                idx={row.id}
                                size='sm'
                                errors={errors.ingredients[i].quantity}
                            />
                            <Input
                                label='Ingredient'
                                name='ingredient'
                                handler={(e) =>
                                    handleFormChanges(
                                        e,
                                        'ingredients',
                                        'ingredient'
                                    )
                                }
                                value={row.ingredient}
                                idx={row.id}
                                size='sm'
                                errors={errors.ingredients[i].ingredient}
                            />
                            {i > 0 && (
                                <Button
                                    text='X'
                                    idx={row.id}
                                    handler={(e) =>
                                        removeObjectFromArray(e, 'ingredients')
                                    }
                                />
                            )}
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
                </Ingredients>
                <TextArea
                    label='Instructions'
                    name='instructions'
                    handler={handleFormChanges}
                    value={formData.instructions}
                    errors={errors.instructions}
                />
                <Button text='Add recipe' type='submit' />
            </Form>
        </>
    );
};

export default CreateRecipe;
