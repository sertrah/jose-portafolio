const FooterSection = () => {
  return (
    <footer className="bg-white text-white px-6 py-10 mt-16">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-sm">
        <div className="flex items-center justify-center mb-6">
          <div className="h-px w-16 bg-black" />
          <span className="px-4 italic text-lg text-black-1">
            Reach out anytime
          </span>
          <div className="h-px w-16 bg-black" />
        </div>

        <h2 className="mb-4 text-black-1 text-center">Let’s Stay Connected</h2>
        <p className="max-w-xl mx-auto text-gray-700 mb-10 text-center">
          Got questions or want to collaborate? Feel free to reach out — Im open
          to new projects or just a casual chat!
        </p>

        {/* Íconos de redes sociales */}
        <div className="flex justify-center items-center gap-6 mb-10">
          {/* Puedes reemplazar estos cuadrados con íconos reales */}
          <div className="w-10 h-10 bg-gray-300 rounded" />
          <div className="w-10 h-10 bg-gray-300 rounded" />
          <div className="w-10 h-10 bg-gray-300 rounded" />
        </div>

        {/* Sección 2: Navegación */}
        <div className="flex items-center text-center flex-col">
          <h4 className="font-semibold mb-2 text-black-1">Quick Links</h4>
          <ul className="space-y-1 text-gray-400">
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="/resume.pdf" className="hover:text-white">
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Sección 3: Redes sociales */}
        <div className="flex flex-col items-center">
          <h4 className="font-semibold mb-2 text-black-1">Connect</h4>
          <ul className="flex gap-4 text-gray-400">
            <li>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="hover:text-white"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:youremail@example.com"
                className="hover:text-white"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
