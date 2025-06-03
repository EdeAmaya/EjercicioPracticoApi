import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import InputText from "../components/InputText";
import TextArea from "../components/TextArea";
import SelectInput from "../components/SelectInput";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { tiempoPreparacionOptions } from "../utils/apiUrl";
import useDataRecipe from "../hooks/recipes/useDataRecipe";

const Recipes = () => {
  const methods = useForm();
  const { register, handleSubmit, errors } = useDataRecipe(methods);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back button */}
      <div className="mb-8">
        <Link
          to="/home"
          className="inline-flex items-center text-lg font-semibold text-gray-700 bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200 hover:border-purple-300 px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          <span className="text-xl mr-2">←</span>
          Volver al Recetario
        </Link>
      </div>

      {/* Main form container */}
      <div className="bg-white/90 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
        <form onSubmit={handleSubmit} className="p-8">
          {/* Header section */}
          <div className="text-center mb-10">
            <div className="relative inline-block">
              <div className="text-6xl mb-4 animate-bounce">👨‍🍳</div>
              <div className="absolute -top-2 -right-4 text-2xl animate-spin-slow">✨</div>
            </div>
            <Titulo titulo="Registrar Nueva Receta" />
            <p className="text-gray-600 text-lg">
              Agrega una nueva receta a tu colección personal
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Nombre del Platillo */}
            <div className="sm:col-span-6">
              <div className="relative">
                <div className="absolute left-3 top-10 text-xl">🍽️</div>
                <InputText
                  type="text"
                  name="platillo"
                  label="Nombre del Platillo"
                  placeholder="   Ej: Paella Valenciana, Tacos al Pastor..."
                  register={register}
                  error={errors.platillo?.message}
                />
              </div>
            </div>

            {/* Ingredientes */}
            <div className="sm:col-span-6">
              <div className="relative">
                <div className="absolute left-3 top-10 text-xl">🥘</div>
                <TextArea
                  name="ingredientes"
                  label="Ingredientes"
                  placeholder="   Lista todos los ingredientes necesarios:&#10;   - 2 tazas de arroz&#10;   - 1 kg de pollo&#10;   - 200g de camarones&#10;   - Azafrán al gusto..."
                  register={register}
                  error={errors.ingredientes?.message}
                  rows={6}
                />
              </div>
            </div>

            {/* Instrucciones */}
            <div className="sm:col-span-6">
              <div className="relative">
                <div className="absolute left-3 top-10 text-xl">📋</div>
                <TextArea
                  name="instrucciones"
                  label="Instrucciones de Preparación"
                  placeholder="   Describe paso a paso cómo preparar la receta:&#10;   1. Calienta el aceite en una paellera...&#10;   2. Añade el pollo y cocina hasta dorar...&#10;   3. Incorpora el arroz y mezcla bien..."
                  register={register}
                  error={errors.instrucciones?.message}
                  rows={8}
                />
              </div>
            </div>

            {/* Tiempo de Preparación */}
            <div className="sm:col-span-3">
              <div className="relative">
                <div className="absolute left-3 top-10 text-xl">⏱️</div>
                <SelectInput
                  label="Tiempo de Preparación"
                  name="tiempoPreparacion"
                  register={register}
                  options={tiempoPreparacionOptions}
                  error={errors.tiempoPreparacion?.message}
                />
              </div>
            </div>
          </div>

          {/* Submit button */}
          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg"
            >
              💾 Guardar Receta
            </button>
          </div>
        </form>
      </div>

      {/* Decorative elements */}
      <div className="fixed top-20 right-10 text-4xl animate-pulse opacity-20">🍳</div>
      <div className="fixed bottom-20 left-10 text-3xl animate-bounce opacity-20">🥄</div>
      <div className="fixed top-1/2 left-5 text-2xl animate-pulse opacity-20">🧄</div>
    </div>
  );
};

export default Recipes;