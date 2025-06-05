import React from "react";

const AboutMeSection = () => {
  return (
    <section className="px-6 py-12 flex flex-col items-center text-center bg-white min-h-screen">
      {/* Título */}
      <h2 className="text-4xl font-bold">
        More about <span className="italic font-serif">myself</span>
      </h2>

      {/* Descripción */}
      <p className="mt-6 max-w-xl text-lg text-gray-800">
        Hi, I’m Adrian Carter, a passionate web designer with a mission to bring
        creative ideas to life through exceptional design.
      </p>

      {/* Elemento pequeño (podría ser un botón o imagen) */}
      <div className="w-40 h-20 bg-gray-300 mt-10" />

      {/* Elemento grande (podría ser una imagen o tarjeta) */}
      <div className="w-full max-w-3xl h-80 bg-gray-300 mt-8 rounded-xl" />
    </section>
  );
};

export default AboutMeSection;
