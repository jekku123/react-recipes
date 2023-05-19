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
  } = useForm(initialValues, () => submit());

  const submit = async () => {
    try {
      await axios.post('http://localhost:3001/recipes', {
        id: uuid(),
        ...formData,
      });
      window.alert('Recipe posted');
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
      <Input
        label='Author'
        name='author'
        handler={handleFormChanges}
        value={formData.author}
      />
      <Select
        label='Choose a country'
        country={formData.country}
        handler={handleFormChanges}
        value={formData.country}
      />
      <Input
        label='Description'
        name='description'
        handler={handleFormChanges}
        value={formData.description}
      />
      <Input
        label='Image'
        name='imageUrl'
        handler={handleFormChanges}
        value={formData.imageUrl}
      />
      <Ingredients
        ingredients={formData.ingredients}
        handleFormChanges={handleFormChanges}
        insertObjectToArray={insertObjectToArray}
        removeObjectFromArray={removeObjectFromArray}
      />
      <TextArea
        label='Instructions'
        name='instructions'
        handleFormChanges={handleFormChanges}
        value={formData.instructions}
      />
      <Button text='Add recipe' />
    </form>
  );
};

export default CreateRecipe;
