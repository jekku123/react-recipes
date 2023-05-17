const Ingredients = ({
  ingredients,
  handleFormChanges,
  insertIngredientRow,
  removeIngredientRow,
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
            onChange={handleFormChanges}
            value={row.quantity}
          />
          <label htmlFor='ingredient'>Ingredient</label>
          <input
            type='text'
            name='ingredient'
            id='ingredient'
            data-idx={row.id}
            onChange={handleFormChanges}
            value={row.ingredient}
          />
          <button type='button' data-idx={row.id} onClick={removeIngredientRow}>
            Remove
          </button>
        </div>
      ))}

      <button type='button' onClick={insertIngredientRow}>
        Add more
      </button>
    </div>
  );
};

export default Ingredients;
