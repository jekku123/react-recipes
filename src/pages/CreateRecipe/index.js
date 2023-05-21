import axios from 'axios';
import { v4 as uuid } from 'uuid';
import useForm from '../../hooks/useForm';
import Select from '../../components/Select';
import Ingredients from '../../components/Ingredients';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

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
    } = useForm(initialValues, () => submit());

    const submit = async () => {
        try {
            await axios.post('http://localhost:3001/recipes', {
                id: uuid(),
                ...formData,
            });
            alert('Recipe posted');
        } catch (err) {
            console.log('Error: ' + err);
        }
    };

    return (
        <>
            <h2 className={classes.h2}>Add new recipe</h2>
            <form onSubmit={handleSubmit} className={classes.form}>
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
                <Ingredients
                    ingredients={formData.ingredients}
                    handler={handleFormChanges}
                    insertObjectToArray={insertObjectToArray}
                    removeObjectFromArray={removeObjectFromArray}
                    errors={errors.ingredients}
                />
                <TextArea
                    label='Instructions'
                    name='instructions'
                    handler={handleFormChanges}
                    value={formData.instructions}
                    errors={errors.instructions}
                />
                <Button text='Add recipe' type='submit' />
            </form>
        </>
    );
};

export default CreateRecipe;
