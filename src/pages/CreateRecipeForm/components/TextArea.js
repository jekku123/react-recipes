const TextArea = ({ data, handler, value }) => {
  return (
    <div>
      <label htmlFor={data}>Instructions</label>
      <textarea
        id={data}
        name={data}
        onChange={handler}
        value={value}
        rows='4'
        required
      ></textarea>
    </div>
  );
};

export default TextArea;
