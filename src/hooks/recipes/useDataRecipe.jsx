import { useEffect } from "react";
import { url } from "../../utils/apiUrl";
import { useNavigate, useParams } from "react-router-dom";
import useFetchRecipe from "./useFetchRecipe";
import { toast } from "react-hot-toast";

const useDataRecipe = (methods) => {
  const { id } = useParams();
  const { getRecipes, getRecipeById } = useFetchRecipe();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  // Función para guardar el formulario de receta y enviar los datos a la API
  const saveRecipeForm = async (dataForm) => {
    try {
      // Convert tiempoPreparacion to number
      const formattedData = {
        ...dataForm,
        tiempoPreparacion: parseInt(dataForm.tiempoPreparacion)
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });
      
      if (!response.ok) {
        toast.error("Error al guardar la receta");
        throw new Error("Failed to add recipe");
      }
      
      toast.success("¡Receta guardada exitosamente! 🎉");
      getRecipes(); // Obtener la lista actualizada de recetas
      navigate("/home"); // Redirigir a la página de inicio después de guardar
    } catch (error) {
      console.log("Error al guardar:", error);
      toast.error("Error al guardar la receta");
    } finally {
      reset(); // Reiniciar el formulario después de enviar
    }
  };

  // Función para editar una receta
  // Esta función se llama cuando se envía el formulario de edición
  // y envía una solicitud PUT a la API para actualizar los datos de la receta
  const editRecipe = async (dataForm) => {
    try {
      // Convert tiempoPreparacion to number
      const formattedData = {
        ...dataForm,
        tiempoPreparacion: parseInt(dataForm.tiempoPreparacion)
      };

      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });
      
      if (!response.ok) {
        toast.error("Error al actualizar la receta");
        throw new Error("Failed to update recipe");
      }
      
      toast.success("¡Receta actualizada exitosamente! ✨");
      navigate("/home"); // Redirigir a home después de actualizar
    } catch (error) {
      console.error("Error updating recipe:", error);
      toast.error("Error al actualizar la receta");
    } finally {
      reset(); // Reiniciar el formulario después de enviar
      getRecipes(); // Refrescar la lista de recetas después de actualizar
    }
  };

  // Función para manejar la actualización de una receta
  // Esta función se llama cuando se hace clic en el botón de editar
  // y redirige al usuario a la página de edición de la receta
  // pasando el id de la receta como parámetro en la URL
  const handleUpdateRecipe = (id) => {
    navigate(`/recipes/${id}`);
  };

  // Cargar los datos de la receta por id
  // Esta función se llama para obtener los datos de la receta cuando el componente se monta o cuando cambia el id
  const loadRecipe = async () => {
    if (id) {
      const recipe = await getRecipeById(id);
      if (recipe) {
        reset({
          platillo: recipe?.platillo,
          ingredientes: recipe?.ingredientes,
          instrucciones: recipe?.instrucciones,
          tiempoPreparacion: recipe?.tiempoPreparacion?.toString(),
        });
      }
    }
  };

  // Esta función se llama cuando se envía el formulario
  // y decide si guardar una nueva receta o editar una existente
  // dependiendo de si hay un id presente en los parámetros de la URL
  // Si hay un id, se llama a editRecipe, de lo contrario se llama a saveRecipeForm
  const handleRecipeAction = (dataForm) => {
    if (id) {
      editRecipe(dataForm);
    } else {
      saveRecipeForm(dataForm);
    }
  };

  // useEffect para cargar los datos de la receta cuando el componente se monta o cuando cambia el id
  useEffect(() => {
    loadRecipe();
  }, [id]); // Dependencia en id para recargar los datos si cambia

  return {
    register,
    handleSubmit: handleSubmit(handleRecipeAction),
    reset,
    errors,
  };
};

export default useDataRecipe;