const Ingredients = ({
  ingredients,
  handleFormChanges,
  insertObjectToArray,
  removeObjectFromArray,
}) => {
  return (
    <div>
      <label>Ingredients</label>
      {ingredients.map((row) => (
        <div key={row.id}>
          <label htmlFor='quantity'>Quantity</label>
          <input
            type='text'
            name='quantity'
            id='quantity'
            data-idx={row.id}
            onChange={(e) => handleFormChanges(e, 'ingredients', 'quantity')}
            value={row.quantity}
            required
          />
          <label htmlFor='ingredient'>Ingredient</label>
          <input
            type='text'
            name='ingredient'
            id='ingredient'
            data-idx={row.id}
            onChange={(e) => handleFormChanges(e, 'ingredients', 'ingredient')}
            value={row.ingredient}
            required
          />
          <button
            type='button'
            data-idx={row.id}
            onClick={(e) => removeObjectFromArray(e, 'ingredients')}
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type='button'
        onClick={() => {
          insertObjectToArray('ingredients', ['quantity', 'ingredient']);
        }}
      >
        Add more
      </button>
    </div>
  );
};

export default Ingredients;
