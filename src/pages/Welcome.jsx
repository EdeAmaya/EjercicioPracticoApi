import React, { useState, useEffect } from "react";

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowWelcome(false);
      // Aquí iría navigate("/home") en tu aplicación real
      console.log("Navegando a la página principal...");
    }, 300);
  };

  if (!showWelcome) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-yellow-300/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-orange-200/15 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Contenedor principal */}
      <div className={`relative bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-lg w-full text-center border border-white/20 transform transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
      }`}>
        
        {/* Icono principal con animación */}
        <div className="mb-6 relative">
          <div className="inline-block p-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300">
            <div className="text-6xl animate-bounce">👨‍🍳</div>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
        </div>

        {/* Título principal */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">
          ¡Bienvenido!
        </h1>
        
        {/* Subtítulo */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Recetario del Chef Ricardo
        </h2>

        {/* Descripción */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          Descubre un mundo de sabores únicos. Administra tu colección personal de recetas caseras y comparte la magia de la cocina.
        </p>

        {/* Características destacadas */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl">
            <div className="text-2xl mb-2">📚</div>
            <p className="text-sm font-medium text-gray-700">Organiza Recetas</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl">
            <div className="text-2xl mb-2">⏱️</div>
            <p className="text-sm font-medium text-gray-700">Control de Tiempo</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl">
            <div className="text-2xl mb-2">🍽️</div>
            <p className="text-sm font-medium text-gray-700">Fácil Gestión</p>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl">
            <div className="text-2xl mb-2">✨</div>
            <p className="text-sm font-medium text-gray-700">Interfaz Moderna</p>
          </div>
        </div>

        {/* Botón de acción */}
        <button
          onClick={handleAccept}
          className="group relative w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300"
        >
          <span className="relative z-10 flex items-center justify-center">
            Comenzar mi Aventura Culinaria
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </button>

        {/* Texto adicional */}
        <p className="text-xs text-gray-500 mt-4">
          Tu cocina, tus reglas, tus sabores únicos
        </p>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-70"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-orange-300 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-red-300 rounded-full animate-bounce opacity-80"></div>
    </div>
  );
};

export default Welcome;