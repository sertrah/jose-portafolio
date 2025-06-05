import React from "react";
import Button, { ButtonAppearance } from "./shared/Button";

const HeroBanner = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      {/* Imagen de perfil */}
      <div className="w-40 h-40 bg-gray-300 rounded-full mb-6" />

      <h1 className="text-center">Jose Giraldo Ortega</h1>

      <h3 className="text-center">
        Backend developer <span className="mx-2">|</span> Problem Solving
      </h3>

      {/* Iconos */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="w-10 h-10 bg-gray-300" />
        <div className="w-px h-10 bg-gray-200" />
        <div className="w-10 h-10 bg-gray-300" />
        <div className="w-px h-10 bg-gray-200" />
        <div className="w-10 h-10 bg-gray-300" />
      </div>

      {/* Botón de contacto */}

      <Button appearance={ButtonAppearance.OUTLINED}> Contact Me </Button>
    </section>
  );
};

export default HeroBanner;
