const InputText = ({ name, label, placeholder, type = "text", register, error }) => {
  return (
    <div className="sm:col-span-3">
      <label htmlFor={name} className="block text-sm font-bold text-gray-800 mb-2">
        {label}
      </label>
      <div className="mt-2 relative">
        <input
          id={name}
          {...register(name, { required: `${label} es requerido` })}
          placeholder={placeholder}
          type={type}
          className={`block w-full rounded-2xl border-2 px-4 py-3 text-gray-900 placeholder:text-gray-400 bg-white/80 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-500 hover:border-purple-300 ${
            error ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-gray-300'
          }`}
        />
        {error && (
          <div className="flex items-center mt-2">
            <span className="text-red-500 text-sm mr-1">⚠️</span>
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputText;