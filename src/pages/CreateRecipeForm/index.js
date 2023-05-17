import useForm from '../../hooks/useForm';
import Select from './components/Select';
import Ingredients from './components/Ingredients';
import Input from './components/Input';
import TextArea from './components/TextArea';
import { v4 as uuid } from 'uuid';

const initialValues = {
  name: '',
  author: '',
  country: '',
  description: '',
  imageUrl: '',
  ingredients: [{ id: uuid(), quantity: '', ingredient: '' }],
  instructions: '',
};

const CreateRecipeForm = () => {
  const {
    formData,
    handleFormChanges,
    removeIngredientRow,
    insertIngredientRow,
    handleSubmit,
  } = useForm(initialValues);

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <Input data='name' handler={handleFormChanges} value={formData.name}>
          Name
        </Input>
        <Input
          data='author'
          handler={handleFormChanges}
          value={formData.author}
        >
          Author
        </Input>
        <Select
          country={formData.country}
          handler={handleFormChanges}
          value={formData.country}
        />
        <Input
          data='description'
          handler={handleFormChanges}
          value={formData.description}
        >
          Description
        </Input>
        <Input
          data='imageUrl'
          handler={handleFormChanges}
          value={formData.imageUrl}
        >
          Image
        </Input>
        <Ingredients
          ingredients={formData.ingredients}
          insertIngredientRow={insertIngredientRow}
          handleFormChanges={handleFormChanges}
          removeIngredientRow={removeIngredientRow}
        />
        <TextArea
          data='instructions'
          handler={handleFormChanges}
          value={formData.instructions}
        />
        <button type='submit'>Post recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipeForm;
