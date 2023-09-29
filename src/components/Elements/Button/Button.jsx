const Button = (props) => {
  const {
    children,
    variant = "bg-blue-500",
    hoverbg = "hover:bg-blue-800",
    radius = "rounded-md",
    onclick = () => {},
  } = props;
  return (
    <button
      className={`${variant} text-white p-3 ${hoverbg} ${radius}`}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
