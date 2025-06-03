const Titulo = ({ titulo }) => {
  return (
    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6 text-center">
      {titulo}
    </h1>
  );
};

export default Titulo;