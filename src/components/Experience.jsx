import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Ingeniería de sistemas UPEA",
      position: "Auxiliar de docencia (Programacion II)",
      city: "El Alto",
      country: "Bolivia",
      start: "Marzo 2025",
      end: "Diciembre 2025",
      description: "Implementé y desarrollé actividades pedagógicas para la materia de Programación II en la carrera de Ingeniería de Sistemas."
    },
    {
      company: "Ministerio de Desarrollo Rural y Tierras",
      position: "Desarrollador con Macros Excel",
      city: "La Paz",
      country: "Bolivia",
      start: "Enero 2025",
      end: "Julio 2025",
      description: "Optmización y correccion de sistema de generación de certificados, gestión base de datos en Excel."
    },
    {
      company: "Ropa de mujer de pollera - Bella Mujer",
      position: "Web Developer",
      city: "El Alto",
      country: "Bolivia",
      start: "Noviembre 2024",
      end: "Diciembre 2024",
      description: "Desarrollé una pagina web responsiva que integró la ubicación, catalogo de productos y enlaces a redes de la empresa, mejorando la precensia en linea y accesibilidad de la información."
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-[#1a1a1a] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-500 tracking-tight">
          Experiencia Profesional
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 transition-transform duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-2">
                {exp.position}
              </h3>
              <h4 className="text-lg md:text-xl font-semibold text-white mb-1">
                {exp.company} - {exp.city}, {exp.country}
              </h4>
              <p className="text-sm md:text-base text-gray-400 mb-4">
                {exp.start} - {exp.end}
              </p>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
