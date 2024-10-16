import React from 'react';

function Projects() {
  const projects = [
    { id: 1, name: "Annual Science Fair", description: "Showcasing innovative student projects" },
    { id: 2, name: "Community Outreach Program", description: "Engaging with local schools to promote STEM" },
    { id: 3, name: "Robotics Workshop", description: "Hands-on learning with cutting-edge robotics" },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Our Projects</h1>
      <p className="mb-6">
        Here are some of the exciting projects our club is currently working on:
      </p>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;