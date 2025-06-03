const SelectInput = ({ name, label, options, register, error }) => {
  return (
    <div className="sm:col-span-3">
      <label htmlFor={name} className="block text-sm font-bold text-gray-800 mb-2">
        {label}
      </label>
      <div className="mt-2 relative">
        <select
          id={name}
          {...register(name, { required: `${label} es requerido` })}
          className={`block w-full rounded-2xl border-2 px-4 py-3 text-gray-900 bg-white/80 backdrop-blur-sm appearance-none transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-500 hover:border-purple-300 ${
            error ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-gray-300'
          }`}
        >
          <option value="">   Selecciona una opción</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {/* Custom dropdown arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
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

export default SelectInput;