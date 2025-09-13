import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Meu Projeto CLMRA. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
