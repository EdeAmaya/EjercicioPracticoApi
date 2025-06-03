import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useRecipeAction = (getRecipes) => {
  const navigate = useNavigate();

  // Función para eliminar una receta por su id
  // Se usa async/await para manejar la asincronía de la llamada a la API
  const deleteRecipe = async (id) => {
    // Mostrar confirmación antes de eliminar
    if (window.confirm("¿Estás seguro de que deseas eliminar esta receta? Esta acción no se puede deshacer.")) {
      try {
        const response = await fetch(`${url}/${id}`, {
          method: "DELETE",
        });
        
        if (!response.ok) {
          throw new Error("Failed to delete recipe");
        }
        
        toast.success("¡Receta eliminada exitosamente! 🗑️");
        console.log("Recipe deleted:", response);
        getRecipes(); // Refrescar la lista de recetas
      } catch (error) {
        console.error("Error deleting recipe:", error);
        toast.error("Error al eliminar la receta");
      }
    }
  };

  // Función para manejar la actualización de una receta
  // Redirige al formulario de edición con el ID de la receta
  const handleUpdateRecipe = (id) => {
    navigate(`/recipes/${id}`);
  };

  return {
    deleteRecipe,
    handleUpdateRecipe,
  };
};

export default useRecipeAction;