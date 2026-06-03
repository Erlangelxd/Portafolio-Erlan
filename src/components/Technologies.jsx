import React, { useState } from "react";

const Technologies = ({ t }) => {
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

  const categories = Object.keys(technologies).map((id) => ({
    id,
    label: t.technologies.categories[id],
  }));

  return (
    <section
      id="technologies"
      className="bg-slate-50 px-6 py-20 text-slate-900 dark:bg-neutral-900 dark:text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-blue-700 sm:text-4xl md:text-5xl dark:text-blue-400">
              {t.technologies.title}
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">{t.technologies.subtitle}</p>
          </div>

          <div className="flex w-full rounded-full border border-slate-200 bg-white p-1 shadow-sm sm:w-auto dark:border-neutral-700 dark:bg-neutral-950">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`flex-1 rounded-full px-4 py-2 text-sm font-bold transition sm:flex-none ${
                  category === cat.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {technologies[category].map((tech) => (
            <div
              key={tech.name}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-blue-500/50"
            >
              <div className="flex aspect-square items-center justify-center rounded-xl bg-slate-50 p-4 dark:bg-neutral-900">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-14 w-14 object-contain transition group-hover:scale-105 md:h-16 md:w-16"
                />
              </div>
              <p className="mt-4 text-center text-sm font-bold text-slate-700 dark:text-slate-200">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
