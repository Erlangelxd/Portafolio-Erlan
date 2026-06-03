import React from "react";

const Contact = ({ t }) => {
  const socialLinks = [
    {
      name: "Correo",
      url: "mailto:carrillobautistaerlanangel@gmail.com",
      color: "text-orange-500 dark:text-orange-400",
      svg: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/erlan-angel-carrillo-bautista-24a95a299/",
      color: "text-blue-600 dark:text-blue-400",
      svg: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/Erlangelxd",
      color: "text-slate-700 dark:text-slate-100",
      svg: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "CV",
      url: "../documentos/Erlan2026CV.pdf",
      color: "text-blue-600 dark:text-blue-400",
      svg: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM13 3.5V9h5.5L13 3.5zM8 13h8v1.5H8V13zm0 3h8v1.5H8V16zm0-6h4v1.5H8V10z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="bg-white px-6 py-20 text-slate-900 dark:bg-neutral-950 dark:text-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm md:p-12 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="text-3xl font-black tracking-tight text-blue-700 sm:text-4xl md:text-5xl dark:text-blue-400">
          {t.contact.title}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          {t.contact.subtitle}{" "}
          <span className="font-bold text-orange-600 dark:text-orange-400">{t.contact.highlight}</span>
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-300 dark:border-neutral-700 dark:bg-neutral-950 dark:hover:border-blue-500"
            >
              <span className={link.color}>{link.svg}</span>
            </a>
          ))}
        </div>

        <a
          href="mailto:carrillobautistaerlanangel@gmail.com"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 font-bold text-white shadow-lg shadow-blue-600/15 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
        >
          {t.contact.cta}
        </a>
      </div>
    </section>
  );
};

export default Contact;
