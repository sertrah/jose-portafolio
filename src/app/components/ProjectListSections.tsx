"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";

const projects = [
  {
    title: "API RESTFULL",
    description:
      "Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly.",
    tags: ["C#", "Kafka"],
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Built an analytics dashboard for tracking customer activity, inventory, and orders using React and Node.js.",
    tags: ["React", "Node.js"],
  },
  {
    title: "Chat App",
    description:
      "Real-time messaging with WebSockets and scalable backend using Golang.",
    tags: ["Go", "WebSocket"],
  },
  // agrega más proyectos si quieres
];

const ProjectListSection = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: { perView: 1, spacing: 16 },
    created: () => {
      setInterval(() => {
        instanceRef.current?.next();
      }, 5000); // autoplay cada 5 segundos
    },
  });

  return (
    <section className="px-6 py-12 flex flex-col items-center">
      <h3 className="font-serif italic text-lg relative inline-block before:content-[''] before:block before:absolute before:w-10 before:h-px before:bg-white before:top-1/2 before:-left-12 after:content-[''] after:block after:absolute after:w-10 after:h-px after:bg-white after:top-1/2 after:-right-12">
        Skills & Background
      </h3>
      <h2 className="text-center text-2xl font-bold mb-4">
        My Latest Projects
      </h2>
      <div ref={sliderRef} className="keen-slider">
        {projects.map((project, index) => (
          <div
            key={index}
            className="keen-slider__slide bg-rose-300 rounded-xl p-6 space-y-3"
          >
            <div className="flex gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-bold text-lg uppercase">{project.title}</h3>
            <hr className="border-white/60" />
            <p className="text-sm text-gray-800">{project.description}</p>
            <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectListSection;
