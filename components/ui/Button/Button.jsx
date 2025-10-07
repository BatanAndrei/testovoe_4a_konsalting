const Button = ({ title, className, handleClick }) => {
  return (
    <button onClick={handleClick} className={className}>
      {title}
    </button>
  );
};

export default Button;
