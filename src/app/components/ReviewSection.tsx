import React from "react";

const ReviewsSection = () => {
  return (
    <section className="px-6 py-12 bg-white flex flex-col items-center text-center">
      {/* Etiqueta superior */}
      <span className="bg-gray-200 text-sm px-3 py-1 rounded-full mb-4">
        FQA’s
      </span>

      {/* Título */}
      <h2 className="font-bold text-black-1">Collaborator Reviews</h2>

      {/* Subtítulo */}
      <p className="mt-4 max-w-md text-gray-700">
        Real feedback from clients who trusted my design expertise to elevate
        their brands successfully.
      </p>

      {/* Card de reseña */}
      <div className="mt-8 bg-gray-100 rounded-xl p-6 max-w-xl w-full text-left shadow-sm">
        <h3 className="text-lg font-semibold">Harlen Giraldo</h3>
        <p className="text-sm text-gray-600 mb-4">Senior Software Developer</p>
        <hr className="mb-4" />
        <p className="text-base text-gray-800">
          “Every project Meily touches turns into a perfect blend of design and
          purpose. She crafted packaging that reflected our eco-friendly mission
          while making our products stand out on the shelves.
        </p>
      </div>

      {/* Indicadores tipo carrusel */}
      <div className="flex space-x-2 mt-6">
        <span className="w-3 h-3 bg-gray-400 rounded-full" />
        <span className="w-3 h-3 bg-gray-200 rounded-full" />
        <span className="w-3 h-3 bg-gray-200 rounded-full" />
      </div>
    </section>
  );
};

export default ReviewsSection;
