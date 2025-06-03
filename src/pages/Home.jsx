import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import Button from "../components/Button";
import ButtonDelete from "../components/ButtonDelete";
import useFetchRecipe from "../hooks/recipes/useFetchRecipe";
import useRecipeAction from "../hooks/recipes/useRecipeAction";

const Home = () => {
  const { dataRecipe, getRecipes } = useFetchRecipe();
  const { deleteRecipe, handleUpdateRecipe } = useRecipeAction(getRecipes);

  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          📚 Recetario del Chef Ricardo
        </h1>
        <p className="text-gray-600 mb-6">
          Administra tu colección de recetas caseras
        </p>
        
        <Link
          to="/recipes"
          className="inline-block text-xl font-bold text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors shadow-md"
        >
          + Agregar Nueva Receta
        </Link>
      </div>

      <Titulo titulo="Mis Recetas" />

      <p className="mt-1 text-sm text-gray-600 mb-6">
        Lista de todas las recetas registradas en tu colección.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-100 text-gray-700 text-left text-sm">
            <tr>
              <th className="px-6 py-3 border-b font-semibold">Platillo</th>
              <th className="px-6 py-3 border-b font-semibold">Ingredientes</th>
              <th className="px-6 py-3 border-b font-semibold">Instrucciones</th>
              <th className="px-6 py-3 border-b font-semibold">Tiempo</th>
              <th className="px-6 py-3 border-b font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataRecipe?.map((recipe) => (
              <tr
                key={recipe.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {recipe.platillo}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  <div className="max-w-xs">
                    {truncateText(recipe.ingredientes)}
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">
                  <div className="max-w-xs">
                    {truncateText(recipe.instrucciones)}
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    ⏱️ {recipe.tiempoPreparacion} min
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <Button 
                      text="Editar"
                      onClick={() => handleUpdateRecipe(recipe.id)} 
                    />
                    <ButtonDelete 
                      text="Eliminar" 
                      onClick={() => deleteRecipe(recipe.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {dataRecipe?.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No hay recetas registradas
            </h3>
            <p className="text-gray-500">
              Comienza agregando tu primera receta haciendo clic en el botón de arriba.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;