# 👨‍🍳 Recetario del Chef Ricardo

Una aplicación web moderna para gestionar y organizar tus recetas favoritas. Desarrollada con React, Vite y TailwindCSS.

## ✨ Características

- 📝 **Crear recetas**: Agrega nuevas recetas con ingredientes, instrucciones y tiempo de preparación
- ✏️ **Editar recetas**: Modifica tus recetas existentes
- 🗑️ **Eliminar recetas**: Elimina recetas que ya no necesites
- 📋 **Lista organizada**: Visualiza todas tus recetas en una tabla organizada
- ⏱️ **Tiempo de preparación**: Organiza por tiempo de cocción (15 min - 4+ horas)
- 🎨 **Diseño moderno**: Interfaz atractiva con gradientes y animaciones
- 📱 **Responsive**: Adaptado para dispositivos móviles y desktop

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de construcción rápida para desarrollo
- **React Router DOM** - Navegación entre páginas
- **React Hook Form** - Manejo eficiente de formularios
- **React Hot Toast** - Notificaciones elegantes
- **TailwindCSS** - Framework de CSS para estilos
- **API REST** - Consumo de API externa para persistencia de datos

## 🚀 Instalación y Ejecución Local

### Prerrequisitos

Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)

### Pasos para ejecutar el proyecto

1. **Clona el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd recetario-chef-ricardo
   ```

2. **Abre el proyecto en Visual Studio Code**
   ```bash
   code .
   ```

3. **Abre la terminal integrada en VS Code**
   - Usa el atajo `Ctrl + ` ` (backtick) o
   - Ve a **Terminal > Nueva Terminal** en el menú

4. **Instala las dependencias**
   ```bash
   npm i
   ```
   
   Este comando instalará todas las dependencias necesarias listadas en `package.json`.

5. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

6. **Abre tu navegador**
   
   El servidor se iniciará automáticamente y verás un mensaje similar a:
   ```
   ➜  Local:   http://localhost:5173/
   ➜  Network: use --host to expose
   ```
   
   Abre [http://localhost:5173/](http://localhost:5173/) en tu navegador.

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Button.jsx      # Botón principal
│   ├── ButtonDelete.jsx # Botón de eliminar
│   ├── InputFile.jsx   # Input para archivos
│   ├── InputText.jsx   # Input de texto
│   ├── SelectInput.jsx # Select dropdown
│   ├── SubTitulo.jsx   # Subtítulos
│   ├── TextArea.jsx    # Área de texto
│   └── Titulos.jsx     # Títulos principales
├── hooks/              # Custom hooks
│   ├── recipes/        # Hooks específicos para recetas
│   └── useImageChange.jsx # Hook para manejo de imágenes
├── pages/              # Páginas de la aplicación
│   ├── Home.jsx        # Página principal con lista de recetas
│   ├── Recipe.jsx      # Formulario para crear/editar recetas
│   ├── Welcome.jsx     # Página de bienvenida
│   └── PageNotFound.jsx # Página 404
├── utils/              # Utilidades y configuraciones
│   └── apiUrl.jsx      # URL de la API y opciones
└── App.jsx             # Componente principal con rutas
```

## 🌐 API

La aplicación utiliza una API REST externa para el almacenamiento de datos:
- **Base URL**: `https://retoolapi.dev/DBFXqn/recetas`
- **Métodos**: GET, POST, PUT, DELETE
- **Datos**: JSON con estructura de recetas

### Estructura de datos de una receta:
```javascript
{
  "id": "string",
  "platillo": "string",
  "ingredientes": "string",
  "instrucciones": "string",
  "tiempoPreparacion": "number"
}
```

## 📱 Rutas de la Aplicación

- `/` - Página de bienvenida
- `/home` - Lista de todas las recetas
- `/recipes` - Formulario para crear nueva receta
- `/recipes/:id` - Formulario para editar receta existente

## 🎯 Funcionalidades Principales

### ➕ Crear Receta
1. Ve a la página de inicio (`/home`)
2. Haz clic en "Agregar Nueva Receta"
3. Completa el formulario con:
   - Nombre del platillo
   - Lista de ingredientes
   - Instrucciones paso a paso
   - Tiempo de preparación
4. Haz clic en "Guardar Receta"

### ✏️ Editar Receta
1. En la lista de recetas, haz clic en "Editar"
2. Modifica los campos necesarios
3. Haz clic en "Guardar Receta"

### 🗑️ Eliminar Receta
1. En la lista de recetas, haz clic en "Eliminar"
2. Confirma la acción en el modal

## 🎨 Características de Diseño

- **Gradientes modernos**: Colores vibrantes y atractivos
- **Animaciones suaves**: Hover effects y transiciones
- **Iconos emoji**: Interfaz amigable y divertida
- **Glass morphism**: Efectos de cristal con backdrop-blur
- **Responsive design**: Adaptado para todos los dispositivos

```
⭐ ¡Si te gusta este proyecto, no olvides darle una estrella!
