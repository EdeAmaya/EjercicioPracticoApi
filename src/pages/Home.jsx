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
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="relative">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            📚 Recetario del Chef Ricardo
          </h1>
          <div className="absolute -top-2 -right-8 text-4xl animate-spin-slow">✨</div>
          <div className="absolute -top-4 -left-12 text-3xl animate-bounce">🍳</div>
        </div>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Tu colección personal de sabores únicos y recetas tradicionales
        </p>
        
        <Link
          to="/recipes"
          className="inline-flex items-center text-xl font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          <span className="text-2xl mr-2">+</span>
          Agregar Nueva Receta
        </Link>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8">
        <Titulo titulo="Mis Recetas" />

        <p className="mt-1 text-sm text-gray-600 mb-6">
          Lista de todas las recetas registradas en tu colección.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800 text-left text-sm">
              <tr>
                <th className="px-6 py-4 font-bold">🍽️ Platillo</th>
                <th className="px-6 py-4 font-bold">🥘 Ingredientes</th>
                <th className="px-6 py-4 font-bold">📋 Instrucciones</th>
                <th className="px-6 py-4 font-bold">⏱️ Tiempo</th>
                <th className="px-6 py-4 font-bold">⚙️ Acciones</th>
              </tr>
            </thead>
            <tbody>
              {dataRecipe?.map((recipe, index) => (
                <tr
                  key={recipe.id}
                  className={`border-b hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 ${
                    index % 2 === 0 ? 'bg-white/50' : 'bg-gray-50/50'
                  }`}
                >
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">🍴</span>
                      <span>{recipe.platillo}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <div className="max-w-xs bg-gray-50 rounded-lg p-2 text-sm">
                      {truncateText(recipe.ingredientes)}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <div className="max-w-xs bg-gray-50 rounded-lg p-2 text-sm">
                      {truncateText(recipe.instrucciones)}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border border-blue-200">
                      ⏱️ {recipe.tiempoPreparacion} min
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <Button 
                        text="✏️ Editar"
                        onClick={() => handleUpdateRecipe(recipe.id)} 
                      />
                      <ButtonDelete 
                        text="🗑️ Eliminar" 
                        onClick={() => deleteRecipe(recipe.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {dataRecipe?.length === 0 && (
            <div className="text-center py-16">
              <div className="text-8xl mb-6 animate-pulse">🍽️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                No hay recetas registradas
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                ¡Tu libro de cocina está esperando por su primera receta!
              </p>
              <Link
                to="/recipes"
                className="inline-flex items-center text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-xl mr-2">+</span>
                Crear mi primera receta
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;