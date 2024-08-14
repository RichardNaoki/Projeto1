import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  console.log("Header component is rendered");
  return (
    <header
      className="bg-blue-500 p-4 text-white"
      style={{ backgroundColor: "red", padding: "20px", color: "white" }}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-200">
            Minha Aplicação
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/Home" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-gray-200">
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/Services" className="hover:text-gray-200">
              Serviços
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-gray-200">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
