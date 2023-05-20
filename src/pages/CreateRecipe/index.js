import axios from 'axios';
import { v4 as uuid } from 'uuid';
import useForm from './hooks/useForm';
import Select from './components/Select';
import Ingredients from './components/Ingredients';
import Input from './components/Input';
import TextArea from './components/TextArea';
import Button from './components/Button';

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
        <form onSubmit={handleSubmit}>
            <Input
                label='Name'
                name='name'
                handler={handleFormChanges}
                value={formData.name}
            />
            <span>{errors?.name}</span>
            <Input
                label='Author'
                name='author'
                handler={handleFormChanges}
                value={formData.author}
            />
            <span>{errors?.author}</span>

            <Select
                label='Choose a country'
                country={formData.country}
                handler={handleFormChanges}
                value={formData.country}
            />
            <span>{errors?.country}</span>

            <Input
                label='Description'
                name='description'
                handler={handleFormChanges}
                value={formData.description}
            />
            <span>{errors?.description}</span>

            <Input
                label='Image'
                name='imageUrl'
                handler={handleFormChanges}
                value={formData.imageUrl}
            />
            <span>{errors?.imageUrl}</span>

            <Ingredients
                ingredients={formData.ingredients}
                handleFormChanges={handleFormChanges}
                insertObjectToArray={insertObjectToArray}
                removeObjectFromArray={removeObjectFromArray}
            />
            <span>{errors?.name}</span>

            <TextArea
                label='Instructions'
                name='instructions'
                handleFormChanges={handleFormChanges}
                value={formData.instructions}
            />
            <span>{errors?.instructions}</span>

            <Button text='Add recipe' />
        </form>
    );
};

export default CreateRecipe;
