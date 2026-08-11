import {
  useState,
} from "react";

import ProjectCard
  from "../components/ProjectCard";

import {
  projects,
  type ProjectCategory,
} from "../data/projects";


type Filter =
  | "All"
  | ProjectCategory;


const filters: Filter[] = [
  "All",
  "Automation",
  "Machine Learning",
  "Robotics",
  "Embedded",
];


export default function Projects() {

  const [
    activeFilter,
    setActiveFilter,
  ] = useState<Filter>("All");


  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category ===
            activeFilter,
        );


  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-[#241F1B] bg-[#0D0C0B] px-6 py-28"
    >

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#FF8A32]">
              Selected Engineering Work
            </p>


            <h2 className="mt-5 text-4xl font-black tracking-tight text-[#F7F3ED] md:text-6xl">

              Systems I've

              <span className="text-[#E87524]">
                {" "}designed & built.
              </span>

            </h2>


            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#BEB5AC]">

              Selected work across machine learning,
              AI agents, n8n and GoHighLevel automation,
              autonomous robotics, ROS2 and
              embedded intelligence.

            </p>

          </div>


          {/* FILTERS */}
          <div className="flex flex-wrap gap-2">

            {filters.map(
              (filter) => (

                <button
                  key={filter}
                  type="button"
                  onClick={() =>
                    setActiveFilter(filter)
                  }
                  className={
                    activeFilter === filter

                      ? "rounded-lg bg-[#E87524] px-4 py-2.5 text-xs font-bold text-white"

                      : "rounded-lg border border-[#332A24] bg-[#151210] px-4 py-2.5 text-xs font-semibold text-[#D8D0C7] transition hover:border-[#E87524]/60 hover:text-[#FF8A32]"
                  }
                >

                  {filter}

                </button>

              ),
            )}

          </div>

        </div>


        {/* CARDS */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {filteredProjects.map(
            (project) => (

              <ProjectCard
                key={project.id}
                project={project}
              />

            ),
          )}

        </div>

      </div>

    </section>
  );
}