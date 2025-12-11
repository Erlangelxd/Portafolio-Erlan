import React from "react";

const Header = () => {
  const nombre = "{Erlan A. Carrillo Bautista}"
  const socialLinks = [
    {
      name: "Correo",
      url: "mailto:carrillobautistaerlanangel@gmail.com",
      color: "text-orange-500",
      icon: (
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/erlan-angel-carrillo-bautista-24a95a299/",
      color: "text-blue-500",
      icon: (
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V9h3v10zM6.5 7.5A1.75 1.75 0 116.5 4a1.75 1.75 0 010 3.5zM19 19h-3v-5c0-1.2-.4-2-1.4-2-1 0-1.6.8-1.6 2v5h-3V9h3v1.2c.5-.7 1.4-1.2 2.7-1.2 2 0 3.3 1.3 3.3 3.8V19z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/Erlangelxd",
      color: "text-gray-300",
      icon: (
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .5C5.6.5.5 5.6.5 12a11.5 11.5 0 007.8 10.9c.6.1.8-.3.8-.6v-2c-3.2.7-3.8-1.5-3.8-1.5-.5-1.2-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.8 1.2 1.8 1.2 1 1.7 2.8 1.2 3.5.9.1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a10.8 10.8 0 015.9 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.3.8 1 .8 2.1v3c0 .3.2.7.8.6A11.5 11.5 0 0023.5 12C23.5 5.6 18.4.5 12 .5z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/erlangel_xd",
      color: "text-orange-400",
      icon: (
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7.5 2A5.5 5.5 0 002 7.5v9A5.5 5.5 0 007.5 22h9a5.5 5.5 0 005.5-5.5v-9A5.5 5.5 0 0016.5 2h-9zm9 1.5a4 4 0 014 4v9a4 4 0 01-4 4h-9a4 4 0 01-4-4v-9a4 4 0 014-4h9zm-4.5 3A5.5 5.5 0 1017 12a5.5 5.5 0 00-5.5-5.5zm0 1.5A4 4 0 1112 16a4 4 0 010-8zm5.8-2a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
        </svg>
      ),
    },
    {
      name: "CV",
      url: "../documentos/Erlan2025CV.pdf",
      color: "text-blue-400",
      icon: (
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM9 7h2v2H9V7zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4 4H9v2h4v-2zm4-12v4h4l-4-4z" />
        </svg>
      ),
    },
  ];

  return (
    <header className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 transition-colors duration-500">
      <div className="max-w-3xl mx-auto text-center">
        <img
          src="../assets/img/Perfil_ErlanA.jpg"
          alt="Erlan Carrillo"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto border-4 border-blue-500 shadow-[0_0_20px_#2563eb] object-cover mb-8"
        />

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3 font-['Archivo_Black']">
          ¡Hola!
        </h1>
        <h2 className="text-2xl md:text-4xl text-gray-200 mb-4">
          Soy{" "}
          <span className="text-blue-500 font-semibold">
            {nombre}
          </span>
        </h2>
        <p className="text-lg md:text-xl text-orange-400 font-medium mb-8">
          Ing. de sistemas \ Desarrollador Web
        </p>

        <div className="flex flex-wrap justify-center gap-5 mb-10">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full shadow-md hover:shadow-[0_0_15px_#3B82F6] transition transform hover:scale-110"
            >
              <span className={link.color}>{link.icon}</span>
            </a>
          ))}
        </div>

        <button
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-full shadow-md hover:bg-orange-600 transition transform hover:scale-105"
        >
          Conoce más sobre mí
        </button>
      </div>
    </header>
  );
};

export default Header;
