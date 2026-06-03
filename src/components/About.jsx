import React from "react";

const About = ({ t }) => {
  return (
    <section id="about" className="bg-white px-6 py-20 text-slate-900 dark:bg-neutral-950 dark:text-white">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-600 dark:text-orange-400">
            Portfolio
          </p>
          <h2 className="text-3xl font-black tracking-tight text-blue-700 sm:text-4xl md:text-5xl dark:text-blue-400">
            {t.about.title}
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8 dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-base leading-8 text-slate-600 md:text-lg dark:text-slate-300">{t.about.body}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {t.about.highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
