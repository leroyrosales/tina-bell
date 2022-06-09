import React, { useState, useEffect } from "react";
import sanityClient from "../client";

export default function Projects() {
  const [projectData, setProjects] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      projectType,
      link,
      body
    }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);
  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section>
        <div className="container mx-auto">
          <h1 className="text-5xl flex justify-center">projects page</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData &&
              projectData.map((project, index) => (
                <article key={index}>
                  <h2>{project.title}</h2>
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View this project{" "}
                    <span role="img" aria-label="right pointer">👉🏽</span>
                  </a>
                  <p>{project.projectType}</p>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
