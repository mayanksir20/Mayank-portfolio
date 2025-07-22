import React, { useState } from "react";
import { projects } from "../../constants";
import { FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { wordpressProjects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIcons, setActiveIcons] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const toggleIcons = (id) => {
    setActiveIcons((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4 relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full mt-2 h-48 object-cover rounded-xl"
              />

              {/* View Icon */}
              <button
                onClick={() => toggleIcons(project.id)}
                className="absolute top-1 right-2 text-white text-xl hover:text-purple-500 transition z-10"
                title="View Links"
              >
                <FaEye />
              </button>

              {/* Floating Action Icons */}
              {activeIcons === project.id && (
                <div className="absolute top-14 right-2 bg-[#251f38] border border-purple-600 rounded-xl p-3 flex flex-col gap-3 animate-fade-in z-50">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                      className="text-white hover:text-purple-400 text-xl"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.webapp && (
                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Site"
                      className="text-white hover:text-purple-400 text-xl"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Project Content */}
            <div className="p-6" onClick={() => handleOpenModal(project)}>
              <h3 className="text-xl font-bold text-white mb-1">
                {project.title}
              </h3>
              <div className="text-gray-500 mb-4 pt-2">
                <p className="text-gray-400 text-sm text-justify mt-2 line-clamp-4 max-h-[6.5em] overflow-hidden">
                  {Array.isArray(project.description)
                    ? project.description.join(" ")
                    : project.description}
                </p>
              </div>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="modal-scroll bg-gray-900 rounded-xl shadow-2xl w-[98%] max-w-[600px] lg:w-[80%] max-h-[500px] overflow-y-auto relative">
            <div className="flex justify-end p-4 sticky top-0 bg-gray-900 z-10">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col px-6 pb-6">
              <div className="w-full flex justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>

                {/* Full Description as List */}
                {Array.isArray(selectedProject.description) && (
                  <ul className="list-disc ml-5 space-y-2 text-gray-400 text-sm">
                    {selectedProject.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mt-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 px-4 py-2 rounded-xl text-sm font-semibold text-center"
                    >
                      View Code
                    </a>
                  )}
                  {selectedProject.webapp && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-sm font-semibold text-center"
                    >
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="wordpress-section text-center mt-16">
        <h2 className="text-4xl font-bold text-white">
          Work on WordPress Projects
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>
      <div className="w-full p-3 mt-5 border border-white bg-gray-900 rounded-2xl shadow-2xl">
        {wordpressProjects.map((project, index) => (
          <div key={project.id}>
            <div
              className={`flex flex-col md:flex-row items-start bg-gray-900 p-3 rounded-xl shadow-md w-full mx-auto relative ${
                index !== 0 ? "mt-6" : ""
              } cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-1 transition-transform duration-300`}
              onClick={() => handleOpenModal(project)}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-[200px] h-[120px] object-cover rounded-md"
              />

              {/* Text Content */}
              <div className="flex flex-col justify-center md:ml-6 mt-4 md:mt-0 w-full relative">
                {/* External Link */}
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-0 right-0 text-white hover:text-purple-500 transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt size={20} />
                </a>

                {/* Title */}
                <h5 className="text-xl font-bold text-white">
                  {project.title}
                </h5>

                {/* Description */}
                <p className="text-gray-400 text-justify mt-2 line-clamp-4 max-h-[6.5em] overflow-hidden">
                  {Array.isArray(project.description)
                    ? project.description.join(" ")
                    : project.description}
                </p>

                {/* Tags */}
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Divider */}
            {index !== wordpressProjects.length - 1 && (
              <hr className="my-5 border-gray-700" />
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10 p-4">
          <div className="modal-scroll bg-gray-900 rounded-xl shadow-2xl w-[98%] max-w-[600px] lg:w-[80%] max-h-[500px] overflow-y-auto relative">
            <div className="flex justify-end p-4 sticky top-0 bg-gray-900 z-10">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col px-6 pb-6">
              <div className="w-full flex justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>

                {/* Description List */}
                {Array.isArray(selectedProject.description) ? (
                  <ul className="list-disc ml-5 space-y-2 text-gray-400 text-sm">
                    {selectedProject.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-sm">
                    {selectedProject.description}
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {selectedProject.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* External Link */}
                {selectedProject.externalUrl && (
                  <a
                    href={selectedProject.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mt-6 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-sm font-semibold text-center"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
