const TextArea = ({ data, instructions, handleFormChanges }) => {
  return (
    <div>
      <label htmlFor={data}>Instructions</label>
      <textarea
        id={data}
        name={data}
        onChange={handleFormChanges}
        value={instructions}
        rows='4'
      ></textarea>
    </div>
  );
};

export default TextArea;
