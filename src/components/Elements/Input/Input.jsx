const Input = (props) => {
  const { type, size, name, onchange, value} = props;
  return (
    <input
      type={type}
      name={name}
      onChange={onchange}
      value={value}
      placeholder="Add your to do"
      className={`border-2 rounded-md border-slate-300 p-3 ${size}`}
    />
  );
};

export default Input;
