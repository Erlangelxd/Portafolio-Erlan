import React, { useState } from "react";

const Header = ({ t, theme, language, setTheme, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nombre = "Erlan A. Carrillo Bautista";

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "technologies", label: t.nav.technologies },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  const socialLinks = [
    {
      name: "Correo",
      url: "mailto:carrillobautistaerlanangel@gmail.com",
      color: "text-orange-500 dark:text-orange-400",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/erlan-angel-carrillo-bautista-24a95a299/",
      color: "text-blue-600 dark:text-blue-400",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V9h3v10zM6.5 7.5A1.75 1.75 0 116.5 4a1.75 1.75 0 010 3.5zM19 19h-3v-5c0-1.2-.4-2-1.4-2-1 0-1.6.8-1.6 2v5h-3V9h3v1.2c.5-.7 1.4-1.2 2.7-1.2 2 0 3.3 1.3 3.3 3.8V19z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/Erlangelxd",
      color: "text-slate-700 dark:text-slate-100",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 .5C5.6.5.5 5.6.5 12a11.5 11.5 0 007.8 10.9c.6.1.8-.3.8-.6v-2c-3.2.7-3.8-1.5-3.8-1.5-.5-1.2-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.8 1.2 1.8 1.2 1 1.7 2.8 1.2 3.5.9.1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a10.8 10.8 0 015.9 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.3.8 1 .8 2.1v3c0 .3.2.7.8.6A11.5 11.5 0 0023.5 12C23.5 5.6 18.4.5 12 .5z" />
        </svg>
      ),
    },
    {
      name: t.header.cv,
      url: "../documentos/Erlan2026CV.pdf",
      color: "text-blue-600 dark:text-blue-400",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM13 3.5V9h5.5L13 3.5zM8 13h8v1.5H8V13zm0 3h8v1.5H8V16zm0-6h4v1.5H8V10z" />
        </svg>
      ),
    },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const themeOptions = [
    { id: "light", label: t.controls.light },
    { id: "dark", label: t.controls.dark },
  ];

  return (
    <header className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 dark:bg-neutral-950 dark:text-white">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/80 bg-white/85 px-4 py-3 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <a
            href="#top"
            onClick={handleNavClick}
            className="text-base font-black tracking-tight text-blue-700 dark:text-blue-400"
          >
            {"{Erlan}"}
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavClick}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-neutral-800 dark:hover:text-blue-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <div className="flex rounded-full border border-slate-200 bg-slate-100 p-1 dark:border-neutral-700 dark:bg-neutral-900">
              {["es", "en"].map((option) => (
                <button
                  key={option}
                  onClick={() => setLanguage(option)}
                  className={`min-w-10 rounded-full px-3 py-1 text-xs font-bold uppercase transition ${
                    language === option
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-300"
                  }`}
                  aria-label={`${t.controls.language} ${option.toUpperCase()}`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex rounded-full border border-slate-200 bg-slate-100 p-1 dark:border-neutral-700 dark:bg-neutral-900">
              {themeOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setTheme(option.id)}
                  className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                    theme === option.id
                      ? "bg-orange-500 text-neutral-950 shadow-sm"
                      : "text-slate-600 hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-300"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700 lg:hidden dark:border-neutral-700 dark:bg-neutral-900 dark:text-slate-200"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label="Abrir menu"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10 transition-all duration-300 lg:hidden dark:border-neutral-800 dark:bg-neutral-950 ${
            isMenuOpen ? "max-h-[520px] opacity-100" : "max-h-0 border-transparent opacity-0 shadow-none"
          }`}
        >
          <div className="flex flex-col gap-2 p-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavClick}
                className="rounded-xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 hover:text-blue-700 dark:text-slate-200 dark:hover:bg-neutral-900 dark:hover:text-blue-300"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-2 grid grid-cols-2 gap-3 border-t border-slate-200 pt-3 dark:border-neutral-800">
              <div className="flex rounded-full border border-slate-200 bg-slate-100 p-1 dark:border-neutral-700 dark:bg-neutral-900">
                {["es", "en"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setLanguage(option)}
                    className={`flex-1 rounded-full px-3 py-2 text-xs font-bold uppercase transition ${
                      language === option
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-300"
                    }`}
                    aria-label={`${t.controls.language} ${option.toUpperCase()}`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="flex rounded-full border border-slate-200 bg-slate-100 p-1 dark:border-neutral-700 dark:bg-neutral-900">
                {themeOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setTheme(option.id)}
                    className={`flex-1 rounded-full px-3 py-2 text-xs font-bold transition ${
                      theme === option.id
                        ? "bg-orange-500 text-neutral-950 shadow-sm"
                        : "text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section id="top" className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-16 pt-28 md:px-8 lg:grid-cols-[1fr_0.85fr] lg:pt-28">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-300">
            {t.header.role}
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-7xl dark:text-white">
            {t.header.greeting}{" "}
            <span className="text-blue-700 dark:text-blue-400">{nombre}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {t.header.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full bg-orange-500 px-6 py-3 text-center font-bold text-neutral-950 shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              {t.header.cta}
            </button>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  title={link.name}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-blue-500"
                >
                  <span className={link.color}>{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="absolute inset-0 rounded-[2rem] bg-blue-600/10 blur-2xl dark:bg-blue-500/10" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-black/30">
            <img
              src="../assets/img/Perfil_ErlanA.jpg"
              alt="Erlan Carrillo"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/50 bg-white/90 p-4 shadow-lg backdrop-blur dark:border-neutral-700/80 dark:bg-neutral-950/85">
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{t.header.role}</p>
              <p className="mt-1 text-lg font-black text-blue-700 dark:text-blue-400">{nombre}</p>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
