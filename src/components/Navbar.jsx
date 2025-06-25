const Navbar = () => {
  return (
    <nav className="bg-black px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-white">Readly</div>
        <ul className="flex space-x-6 text-white font-medium">
          <li><a href="#" className="hover:text-blue-500">Home</a></li>
          <li><a href="#" className="hover:text-blue-500">Leituras</a></li>
          <li><a href="#" className="hover:text-blue-500">Buscar</a></li>
          <li><a href="#" className="hover:text-blue-500">Perfil</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
