import React from "react";

const skills = [
  "UI Design",
  "UI Design",
  "UI Design",
  "UI Design",
  "UI Design",
  "UI Design",
  "UI Design",
];

const SkillsExperience = () => {
  return (
    <section className="bg-black-1 py-12 text-center px-6">
      <div className="mb-6">
        <h3 className="font-serif italic text-lg relative inline-block before:content-[''] before:block before:absolute before:w-10 before:h-px before:bg-white before:top-1/2 before:-left-12 after:content-[''] after:block after:absolute after:w-10 after:h-px after:bg-white after:top-1/2 after:-right-12">
          Skills & Background
        </h3>
        <h2 className="mt-2">My work stack and experience</h2>
      </div>

      <div className="bg-gray-100 py-10 rounded-xl mb-8">
        <div className="flex flex-wrap justify-center gap-4 max-w-md mx-auto">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-300 px-4 py-2 rounded-lg text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="text-left max-w-md mx-auto">
        <p className="font-bold">Freelance</p>
        <p className="">GreenLeaf Co., UrbanFir Studio</p>
        <p className="">Jan 2020 - Present</p>
      </div>
    </section>
  );
};

export default SkillsExperience;
