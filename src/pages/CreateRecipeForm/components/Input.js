const Input = ({ children, data, handler }) => {
  return (
    <div>
      <label htmlFor={data}>{children}</label>
      <input
        type='text'
        id={data}
        name={data}
        onChange={handler}
        value={data}
      />
    </div>
  );
};

export default Input;
