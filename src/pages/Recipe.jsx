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
      <div className="mb-6">
        <Link
          to="/home"
          className="inline-flex items-center text-lg font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
        >
          ← Volver al Recetario
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="border border-gray-200 bg-white shadow-lg rounded-lg p-8"
      >
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">👨‍🍳</div>
          <Titulo titulo="Registrar Nueva Receta" />
          <p className="text-gray-600">
            Agrega una nueva receta a tu colección personal
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* Nombre del Platillo */}
          <div className="sm:col-span-6">
            <InputText
              type="text"
              name="platillo"
              label="Nombre del Platillo"
              placeholder="Ej: Paella Valenciana, Tacos al Pastor..."
              register={register}
              error={errors.platillo?.message}
            />
          </div>

          {/* Ingredientes */}
          <div className="sm:col-span-6">
            <TextArea
              name="ingredientes"
              label="Ingredientes"
              placeholder="Lista todos los ingredientes necesarios:&#10;- 2 tazas de arroz&#10;- 1 kg de pollo&#10;- 200g de camarones&#10;- Azafrán al gusto..."
              register={register}
              error={errors.ingredientes?.message}
              rows={6}
            />
          </div>

          {/* Instrucciones */}
          <div className="sm:col-span-6">
            <TextArea
              name="instrucciones"
              label="Instrucciones de Preparación"
              placeholder="Describe paso a paso cómo preparar la receta:&#10;1. Calienta el aceite en una paellera...&#10;2. Añade el pollo y cocina hasta dorar...&#10;3. Incorpora el arroz y mezcla bien..."
              register={register}
              error={errors.instrucciones?.message}
              rows={8}
            />
          </div>

          {/* Tiempo de Preparación */}
          <div className="sm:col-span-3">
            <SelectInput
              label="Tiempo de Preparación"
              name="tiempoPreparacion"
              register={register}
              options={tiempoPreparacionOptions}
              error={errors.tiempoPreparacion?.message}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button type="submit" text="💾 Guardar Receta" />
        </div>
      </form>
    </div>
  );
};

export default Recipes;