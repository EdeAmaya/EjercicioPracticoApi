const ButtonDelete = ({ type, onClick, text }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className="bg-red-500 hover:bg-red-600 text-dark font-semibold py-2 px-4 rounded transition-colors"
      >
        {text}
      </button>
    );
  };
   
  export default ButtonDelete;
   
   