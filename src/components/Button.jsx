const Button = ({ type, onClick, text }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
    >
      {text}
    </button>
  );
};

export default Button;
