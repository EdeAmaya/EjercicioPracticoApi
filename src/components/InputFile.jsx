const InputFile = ({
  label,
  name,
  value,
  onChange,
  error,
  imagePreviews,
  removeImageAtIndex,
}) => {
  return (
    <div className="col-span-full">
      <label
        htmlFor="cover-photo"
        className="block text-sm font-medium text-gray-900"
      >
        {label}
      </label>

      <div className="mt-2 flex flex-col items-center gap-4 rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        {/* Input de archivo */}
        <label
          htmlFor={name}
          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500"
        >
          <span>Upload a image</span>
          <input
            id={name}
            name={name}
            type="file"
            accept="image/*"
            multiple
            onChange={onChange}
            className="sr-only"
          />
        </label>
        <p className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>

        {/* Previsualizaciones */}
        {imagePreviews.length > 0 && (
          <div className="flex gap-4 flex-wrap justify-center mt-4">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="relative">
                <img
                  src={preview}
                  alt={`preview-${index}`}
                  className="w-32 h-32 object-cover rounded-lg shadow"
                />
                <button
                  type="button"
                  onClick={() => removeImageAtIndex(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 text-xs hover:bg-red-600"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default InputFile;
