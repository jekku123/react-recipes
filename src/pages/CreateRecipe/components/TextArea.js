const TextArea = ({ name, handleFormChanges, value }) => {
  return (
    <div>
      <label htmlFor={name}>Instructions</label>
      <textarea
        id={name}
        name={name}
        onChange={handleFormChanges}
        value={value}
        rows='4'
        required
      ></textarea>
    </div>
  );
};

export default TextArea;
