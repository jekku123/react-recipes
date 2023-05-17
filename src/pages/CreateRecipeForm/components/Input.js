const Input = ({ children, data, handler, value }) => {
  return (
    <div>
      <label htmlFor={data}>{children}</label>
      <input
        type='text'
        id={data}
        name={data}
        onChange={handler}
        value={value}
        required
      />
    </div>
  );
};

export default Input;
