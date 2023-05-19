const Input = ({ name, handler, value, label }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type='text'
        id={name}
        name={name}
        onChange={handler}
        value={value}
        required
      />
    </div>
  );
};

export default Input;
