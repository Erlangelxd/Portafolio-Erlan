import React from "react";

const Projects = ({ t }) => {
  const projectData = [
    {
      technologies: "HTML, CSS, Bootstrap, Vercel",
      image: "../assets/projects/bellaM.jpeg",
      link: "https://pollereria-bella-mujer.vercel.app",
      github: null,
    },
    {
      technologies: "React, Tailwind, FastAPI, PostgreSQL, CloudFlare",
      image: "../assets/projects/Pondera.jpeg",
      link: "https://pondera.pages.dev/",
      github: null,
    },
    {
      technologies: "Django, SQLite, TailwindCSS, Render, CloudFlare",
      image: "../assets/projects/votacion.png",
      link: "https://sistema-de-elecciones-upea.onrender.com/",
      github: null,
    },
    {
      technologies: "React, Tailwind, FastAPI, PostgreSQL, CloudFlare, Render",
      image: "../assets/projects/barberia.png",
      link: "https://blessfxbarberstudio.pages.dev/",
      github: null,
    },
  ];

  const projects = projectData.map((project, index) => ({
    ...project,
    ...t.projects.items[index],
  }));

  return (
    <section id="projects" className="bg-slate-50 px-6 py-20 text-slate-900 dark:bg-neutral-900 dark:text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-black tracking-tight text-blue-700 sm:text-4xl md:text-5xl dark:text-blue-400">
            {t.projects.title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{t.projects.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-blue-500/50"
            >
              <img src={project.image} alt={project.title} className="h-56 w-full object-cover sm:h-64" />
              <div className="flex min-h-72 flex-col p-6">
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">{project.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
                  <span className="font-bold text-orange-700 dark:text-orange-300">{t.projects.technologies}:</span>{" "}
                  {project.technologies}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
                  >
                    {t.projects.view}
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-neutral-700 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-300"
                    >
                      {t.projects.code}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
