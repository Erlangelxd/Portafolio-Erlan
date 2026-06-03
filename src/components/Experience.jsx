import React from "react";

const Experience = ({ t }) => {
  return (
    <section id="experience" className="bg-white px-6 py-20 text-slate-900 dark:bg-neutral-950 dark:text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-black tracking-tight text-blue-700 sm:text-4xl md:text-5xl dark:text-blue-400">
            {t.experience.title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{t.experience.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {t.experience.items.map((exp) => (
            <article
              key={`${exp.company}-${exp.position}-${exp.start}`}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-blue-500/50"
            >
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-black text-slate-950 dark:text-white">{exp.position}</h3>
                  <p className="mt-2 font-semibold text-blue-700 dark:text-blue-400">
                    {exp.company}
                  </p>
                </div>
                <span className="w-fit rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700 dark:bg-orange-500/10 dark:text-orange-300">
                  {exp.start} - {exp.end}
                </span>
              </div>

              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                {exp.city}, {exp.country}
              </p>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{exp.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
