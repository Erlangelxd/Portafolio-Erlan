import React, { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

const translations = {
  es: {
    nav: {
      about: "Sobre mi",
      technologies: "Tecnologias",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    controls: {
      light: "Claro",
      dark: "Oscuro",
      language: "Idioma",
    },
    header: {
      greeting: "Hola, soy",
      role: "Ingeniero de sistemas",
      summary:
        "Desarrollo soluciones web con foco en interfaces claras, sistemas de gestion y experiencias digitales confiables.",
      cta: "Conoce mas sobre mi",
      cv: "CV",
    },
    about: {
      title: "Sobre mi",
      body:
        "Soy una persona responsable, proactiva y creativa, apasionada por el arte y la creacion de software. Tengo una constante sed de conocimiento que me impulsa a aprender nuevas tecnologias para desarrollar soluciones digitales de alta calidad.",
      highlights: ["Responsable", "Proactivo", "Creativo"],
    },
    technologies: {
      title: "Tecnologias",
      subtitle: "Herramientas que uso para construir productos web completos.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        herramientas: "Herramientas",
      },
    },
    experience: {
      title: "Experiencia Profesional",
      subtitle: "Roles donde combine desarrollo, automatizacion y apoyo academico.",
      items: [
        {
          company: "Free Lancer",
          position: "Software Developer",
          city: "El Alto",
          country: "Bolivia",
          start: "Noviembre 2024",
          end: "Actualidad",
          description:
            "Desarrollo de sistemas de gestion para pequenas empresas, incluyendo sistemas de reservas, ventas y administracion.",
        },
        {
          company: "Ingenieria de sistemas UPEA",
          position: "Auxiliar de docencia (Programacion I)",
          city: "El Alto",
          country: "Bolivia",
          start: "Marzo 2026",
          end: "Actualidad",
          description:
            "Implemente y desarrolle actividades pedagogicas para la materia de Programacion I en la carrera de Ingenieria de Sistemas.",
        },
        {
          company: "Ingenieria de sistemas UPEA",
          position: "Auxiliar de docencia (Programacion II)",
          city: "El Alto",
          country: "Bolivia",
          start: "Marzo 2025",
          end: "Diciembre 2025",
          description:
            "Implemente y desarrolle actividades pedagogicas para la materia de Programacion II en la carrera de Ingenieria de Sistemas.",
        },
        {
          company: "Ministerio de Desarrollo Rural y Tierras",
          position: "Desarrollador con Macros Excel",
          city: "La Paz",
          country: "Bolivia",
          start: "Enero 2025",
          end: "Julio 2025",
          description:
            "Optimizacion y correccion de un sistema de generacion de certificados, con gestion de base de datos en Excel.",
        },
      ],
    },
    projects: {
      title: "Proyectos",
      subtitle: "Aplicaciones publicadas con enfoque en problemas reales.",
      technologies: "Tecnologias",
      view: "Ver proyecto",
      code: "Codigo",
      items: [
        {
          title: "Web de ventas para una Pollereria",
          description: "Una pagina web para la venta de ropa de mujer.",
        },
        {
          title: "Pondera",
          description:
            "Una pagina web para estudiantes de Ingenieria de Sistemas donde los auxiliares ponderan a sus estudiantes.",
        },
        {
          title: "Sistema de votacion electoral",
          description:
            "Un sistema para registrar candidatos con sus propuestas y permitir que los usuarios elijan entre ellos.",
        },
        {
          title: "Sistema de reservas online para barberias",
          description:
            "Un sistema para registrar barberias, servicios y reservas, con panel administrativo para gestionar ingresos y reservas.",
        },
      ],
    },
    contact: {
      title: "Contactame",
      subtitle: "Tienes un proyecto en mente?",
      highlight: "Hablemos.",
      cta: "Enviar email",
    },
  },
  en: {
    nav: {
      about: "About",
      technologies: "Stack",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    controls: {
      light: "Light",
      dark: "Dark",
      language: "Language",
    },
    header: {
      greeting: "Hi, I am",
      role: "Systems engineer",
      summary:
        "I build web solutions focused on clear interfaces, management systems, and reliable digital experiences.",
      cta: "Learn more about me",
      cv: "Resume",
    },
    about: {
      title: "About",
      body:
        "I am responsible, proactive, and creative, passionate about art and software development. My constant curiosity drives me to learn new technologies and build high-quality digital solutions.",
      highlights: ["Responsible", "Proactive", "Creative"],
    },
    technologies: {
      title: "Technologies",
      subtitle: "Tools I use to build complete web products.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        herramientas: "Tools",
      },
    },
    experience: {
      title: "Professional Experience",
      subtitle: "Roles where I combined development, automation, and academic support.",
      items: [
        {
          company: "Freelance",
          position: "Software Developer",
          city: "El Alto",
          country: "Bolivia",
          start: "November 2024",
          end: "Present",
          description:
            "Development of management systems for small businesses, including booking, sales, and administration systems.",
        },
        {
          company: "Systems Engineering UPEA",
          position: "Teaching Assistant (Programming I)",
          city: "El Alto",
          country: "Bolivia",
          start: "March 2026",
          end: "Present",
          description:
            "Implemented and developed pedagogical activities for Programming I in the Systems Engineering program.",
        },
        {
          company: "Systems Engineering UPEA",
          position: "Teaching Assistant (Programming II)",
          city: "El Alto",
          country: "Bolivia",
          start: "March 2025",
          end: "December 2025",
          description:
            "Implemented and developed pedagogical activities for Programming II in the Systems Engineering program.",
        },
        {
          company: "Ministry of Rural Development and Land",
          position: "Excel Macros Developer",
          city: "La Paz",
          country: "Bolivia",
          start: "January 2025",
          end: "July 2025",
          description:
            "Optimized and corrected a certificate generation system with database management in Excel.",
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Published applications focused on real problems.",
      technologies: "Technologies",
      view: "View project",
      code: "Code",
      items: [
        {
          title: "Sales Website for Pollereria",
          description: "A website for selling women's clothing.",
        },
        {
          title: "Pondera",
          description:
            "A web app for Systems Engineering students where teaching assistants evaluate their students.",
        },
        {
          title: "Electoral Voting System",
          description:
            "A system to register candidates with proposals and let users vote for them.",
        },
        {
          title: "Online Booking System for Barbershops",
          description:
            "A system to register barbershops, services, and bookings, with an admin panel for revenue and reservation management.",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind?",
      highlight: "Let's talk.",
      cta: "Send email",
    },
  },
};

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "es");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language]);

  const t = useMemo(() => translations[language], [language]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-neutral-950 dark:text-white">
      <Header
        t={t}
        theme={theme}
        language={language}
        setTheme={setTheme}
        setLanguage={setLanguage}
      />
      <About t={t} />
      <Technologies t={t} />
      <Experience t={t} />
      <Projects t={t} />
      <Contact t={t} />
    </div>
  );
}

export default App;
