import React from "react";
import Button, { ButtonAppearance } from "./shared/Button";

const AboutMeSection = () => {
  return (
    <section className="px-6 py-12 flex flex-col items-center text-center bg-color-1 min-h-screen">
      <h2 className="">
        More about <span className="italic font-serif">myself</span>
      </h2>

      <p className="mt-6 max-w-xl">
        Hi, I’m Adrian Carter, a passionate web designer with a mission to bring
        creative ideas to life through exceptional design.
      </p>

      <Button appearance={ButtonAppearance.OUTLINED}> Contact Me </Button>

      {/* Elemento grande (podría ser una imagen o tarjeta) */}
      <div className="w-full max-w-3xl h-80 bg-gray-300 mt-8 rounded-xl" />
    </section>
  );
};

export default AboutMeSection;
