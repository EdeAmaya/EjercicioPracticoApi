const ButtonDelete = ({ type, onClick, text }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-2.5 px-5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-red-400 hover:border-red-500"
      >
        {text}
      </button>
    );
  };
   
  export default ButtonDelete;