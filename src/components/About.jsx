import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-800 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-500 tracking-tight">
          Sobre mí
        </h2>

        <div className="bg-[#20000] rounded-2xl p-8 md:p-10  border border-neutral-700">
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            Soy una persona <span className="text-orange-400 font-semibold">responsable</span>,
            <span className="text-blue-400 font-semibold"> proactiva</span> y
            <span className="text-orange-400 font-semibold"> creativa</span>, apasionada por el arte y la
            creación de software. Tengo una constante{" "}
            <span className="text-blue-400 font-semibold">sed de conocimiento</span> que me impulsa a
            aprender nuevas tecnologías para desarrollar soluciones digitales de alta calidad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
