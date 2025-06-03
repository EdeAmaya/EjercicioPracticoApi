import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <h2 className="text-2xl font-semibold mb-2">Página no encontrada</h2>
    <p className="mb-6">La ruta que buscas no existe.</p>
    <Link to="/" className="text-blue-500 hover:underline">
      Volver al inicio
    </Link>
  </div>
);

export default PageNotFound;