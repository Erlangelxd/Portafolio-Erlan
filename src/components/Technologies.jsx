import React, { useState } from "react";

const Technologies = () => {
  const [category, setCategory] = useState("frontend");

  const technologies = {
    frontend: [
      { name: "HTML", icon: "../assets/technologies/HTML5_logo.png" },
      { name: "CSS", icon: "../assets/technologies/CSS_logo.png" },
      { name: "JavaScript", icon: "../assets/technologies/JavaScript_logo.png" },
      { name: "Bootstrap", icon: "../assets/technologies/Boot.png" },
      { name: "React", icon: "../assets/technologies/React_logo.png" },
      { name: "TailwindCSS", icon: "../assets/technologies/tailwind_logo.png" },
      
    ],
    backend: [
      { name: "Python", icon: "../assets/technologies/Python_logo.png" },
      { name: "Java", icon: "../assets/technologies/java_logo.png" },
      { name: "Django", icon: "../assets/technologies/django_logo.png" },
      { name: "Fast API", icon: "../assets/technologies/fastapi_logo.png" },
      { name: "Oracle PLSQL", icon: "../assets/technologies/plsql_logo.png" },
      { name: "Supabase", icon: "../assets/technologies/supabase_logo.png" },
      { name: "PostgreSQL", icon: "../assets/technologies/postgres_logo.png" },
    ],
    herramientas: [
      { name: "Git", icon: "../assets/technologies/Git.png" },
      { name: "GitHub", icon: "../assets/technologies/Github_logo.png" },
      { name: "Vercel", icon: "../assets/technologies/vercel_logo.png" },
      { name: "CloudFlare", icon: "../assets/technologies/Cloudflare_Logo.png" },
      { name: "Render", icon: "../assets/technologies/render_logo.png" },
      { name: "VS Code", icon: "../assets/technologies/vscode_logo.png" },
    ],
  };

  const categories = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "herramientas", label: "Herramientas" },
  ];

  return (
    <section id="technologies" className="py-20 px-6 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-800 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-500 tracking-tight">
          Tecnologías
        </h2>

        {/* Botones de categoría */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`py-2 px-6 rounded-full font-medium transition-all duration-300
                ${
                  category === cat.id
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-neutral-900 text-gray-300 border border-neutral-700 hover:bg-neutral-800"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de tecnologías */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 transition-all duration-500">
          {technologies[category].map((tech, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-blue-500/30 transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4 transition-transform duration-300 hover:scale-110"
              />
              <span className="text-sm md:text-base font-semibold text-gray-200 hover:text-orange-400 transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
