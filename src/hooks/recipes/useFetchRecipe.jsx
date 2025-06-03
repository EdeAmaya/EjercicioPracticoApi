import { useEffect, useState } from "react";
import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";

// Hook para separar la lógica de obtención de recetas
const useFetchRecipe = () => {
  // State para almacenar los datos de las recetas
  const [dataRecipe, setDataRecipe] = useState([]);
  const [loading, setLoading] = useState(false);

  // Función para obtener las recetas desde la API
  const getRecipes = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        toast.error("Error al cargar las recetas");
        throw new Error("Failed to fetch recipes");
      }
      const data = await response.json();
      setDataRecipe(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      toast.error("Error al cargar las recetas");
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener una receta por su id
  // Se usa async/await para manejar la asincronía de la llamada a la API
  const getRecipeById = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`);
      if (!response.ok) {
        console.log("Failed to fetch recipe");
        throw new Error("Failed to fetch recipe");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching recipe:", error);
      toast.error("Error al cargar la receta");
      return null;
    }
  };

  // useEffect para llamar a getRecipes cuando el componente se monta
  useEffect(() => {
    getRecipes();
  }, []);

  // Retornar los datos y las funciones para ser usados en otros componentes
  return {
    dataRecipe,
    setDataRecipe,
    getRecipes,
    getRecipeById,
    loading,
  };
};

export default useFetchRecipe;