import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Web de ventas para una Pollereria (Ropa de mujer)",
      description: "Una página web para la venta de ropa de mujer.",
      technologies: "HTML, CSS, Bootstrap, Vercel",
      image: "../assets/projects/bellaM.jpeg",
      link: "https://pollereria-bella-mujer.vercel.app",
      github: null
    },
    {
      title: "Pondera",
      description: "Una página web para estudiantes de la carrera ing de sistemas donde los auxiliares ponderan a sus estudiantes.",
      technologies: "React, Tailwind, FastAPI, Postgresql, CloudFlare",
      image: "../assets/projects/Pondera.jpeg",
      link: "https://pondera.pages.dev/",
      github: null
    },
    {
      title: "Sistema de elecciones democraticas ",
      description: "Un sistema donde se pueden registrar candidatos junto a sus propuestas y los usuarios pueden elejir entre ellos.",
      technologies: "Django, SQLite, TailwindCss, Render, CloudFlare",
      image: "",
      link: "https://sistema-de-elecciones-upea.onrender.com/",
      github: null
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#222222] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-500 tracking-tight">
          Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Tecnologías:</strong> {project.technologies}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-center"
                  >
                    Ver Proyecto
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-center"
                    >
                      Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
