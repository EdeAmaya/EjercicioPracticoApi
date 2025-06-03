# 👨‍🍳 Recetario del Chef Ricardo

Una aplicación web moderna para gestionar recetas de cocina, desarrollada con React y Vite. Permite crear, editar, eliminar y organizar recetas de manera intuitiva con una interfaz elegante y responsiva.

## 🚀 Características Principales

- ✨ **Gestión completa de recetas**: Crear, editar, visualizar y eliminar recetas
- 🎨 **Interfaz moderna**: Diseño responsive con gradientes y animaciones
- 📱 **Responsive Design**: Adaptable a diferentes dispositivos
- 🔥 **Notificaciones**: Toast notifications para feedback del usuario
- 🌈 **Tema moderno**: Interfaz con glassmorphism y efectos visuales

## ⚙️ Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca principal para la interfaz de usuario
- **Vite** - Herramienta de build y desarrollo
- **React Router DOM** - Enrutado de la aplicación
- **React Hook Form** - Manejo de formularios
- **React Hot Toast** - Notificaciones toast

### Estilos
- **Tailwind CSS** - Framework de CSS utilitario
- **CSS3** - Estilos personalizados y animaciones

### API
- **Fetch API** - Para comunicación con el backend
- **RESTful API** - Arquitectura de la API (Retool API como backend)

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── Button.jsx       # Botón principal
│   ├── ButtonDelete.jsx # Botón de eliminación
│   ├── InputFile.jsx    # Input para archivos (no utilizado actualmente)
│   ├── InputText.jsx    # Input de texto
│   ├── SelectInput.jsx  # Select dropdown
│   ├── SubTitulo.jsx    # Componente de subtítulo
│   ├── TextArea.jsx     # Área de texto
│   └── Titulos.jsx      # Componente de título principal
│
├── hooks/               # Custom hooks
│   ├── recipes/
│   │   ├── useDataRecipe.jsx    # Hook para manejo de datos de recetas
│   │   ├── useFetchRecipe.jsx   # Hook para obtener recetas de la API
│   │   └── useRecipeAction.jsx  # Hook para acciones de recetas
│   └── useImageChange.jsx       # Hook para manejo de imágenes (no utilizado)
│
├── pages/               # Páginas principales
│   ├── Home.jsx         # Página principal con listado de recetas
│   ├── Recipe.jsx       # Formulario para crear/editar recetas
│   ├── Welcome.jsx      # Página de bienvenida
│   └── PageNotFound.jsx # Página 404
│
├── utils/               # Utilidades
│   └── apiUrl.jsx       # Configuración de URLs y opciones
│
├── assets/              # Recursos estáticos
│   └── react.svg        # Logo de React
│
├── App.jsx              # Componente principal
├── main.jsx             # Punto de entrada
├── App.css              # Estilos específicos del componente App
└── index.css            # Estilos globales
```

## 📊 Estructura de Datos

### Modelo de Receta
```javascript
{
  id: number,
  platillo: string,           // Nombre del platillo
  ingredientes: string,       // Lista de ingredientes
  instrucciones: string,      // Pasos de preparación
  tiempoPreparacion: number   // Tiempo en minutos
}
```

### Opciones de Tiempo de Preparación
- 15 minutos
- 30 minutos
- 45 minutos
- 1 hora
- 1 hora 30 minutos
- 2 horas
- 3 horas
- 4+ horas

## 🎯 Funcionalidades Detalladas

### 🏠 Página Principal (Home)
- Listado completo de recetas en formato tabla
- Botones de acción para editar y eliminar
- Truncado inteligente de texto largo
- Navegación hacia el formulario de creación

### 📝 Formulario de Recetas
- Creación y edición de recetas
- Validación de campos requeridos
- Manejo de errores con react-hook-form
- Interfaz intuitiva con iconos y placeholders

### 🔔 Sistema de Notificaciones
- Notificaciones toast para todas las acciones
- Confirmación de eliminación
- Feedback visual para operaciones exitosas/fallidas

## 🎨 Diseño y UX

### Tema Visual
- **Colores principales**: Púrpura, rosa, azul (gradientes)
- **Efectos**: Glassmorphism, sombras, hover effects
- **Animaciones**: Bounce, pulse, scale transforms
- **Tipografía**: System fonts con pesos variables

### Responsive Design
- Mobile-first approach
- Breakpoints de Tailwind CSS
- Tabla responsive con scroll horizontal
- Botones y formularios adaptables

## 🔍 Hooks Personalizados

### `useFetchRecipe`
- Obtención de recetas desde la API
- Estado de loading
- Manejo de errores
- Cache local de datos

### `useDataRecipe`
- Manejo del formulario de recetas
- Lógica de creación/edición
- Navegación automática
- Reset de formularios

### `useRecipeAction`
- Acciones de eliminación
- Confirmaciones de usuario
- Navegación a edición

## 🚀 Despliegue

### Build para Producción
```bash
npm run build
```



