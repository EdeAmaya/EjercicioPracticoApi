import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleAccept = () => {
    setShowWelcome(false);
    navigate("/home");
  };

  if (!showWelcome) return null;

  return (
    <div className="flex items-center justify-center min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-20 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-12 max-w-lg w-full mx-4 text-center transform hover:scale-105 transition-all duration-300">
        {/* Chef icon with animation */}
        <div className="text-8xl mb-6 animate-bounce">
          👨‍🍳
        </div>
        
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
          Recetario del Chef Ricardo
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          ¡Bienvenido a tu cocina digital! 🍽️
          <br />
          Descubre, crea y organiza tus recetas favoritas en un solo lugar.
        </p>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 gap-4 mb-8 text-sm">
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            <span className="text-xl">📝</span>
            <span>Gestiona tus recetas fácilmente</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            <span className="text-xl">⏱️</span>
            <span>Organiza por tiempo de preparación</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            <span className="text-xl">🔍</span>
            <span>Encuentra tus platillos favoritos</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleAccept}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg"
        >
          ✨ Comenzar a Cocinar
        </button>
        
        <p className="text-xs text-gray-500 mt-4">
          Desarrollado con 💜 para los amantes de la cocina
        </p>
      </div>
    </div>
  );
};

export default Welcome;