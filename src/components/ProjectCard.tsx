import {
  Bot,
  BrainCircuit,
  Cpu,
  FileText,
  Workflow,
} from "lucide-react";

import {
  FaGithub,
} from "react-icons/fa";

import type {
  Project,
} from "../data/projects";


const categoryIcons = {
  Robotics: Bot,

  "Machine Learning":
    BrainCircuit,

  Automation:
    Workflow,

  Embedded:
    Cpu,
};


interface ProjectCardProps {
  project: Project;
}


export default function ProjectCard({
  project,
}: ProjectCardProps) {

  const Icon =
    categoryIcons[
      project.category
    ];


  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[#2A2521] bg-[#12100E] transition duration-300 hover:-translate-y-2 hover:border-[#E87524]/60 hover:bg-[#181512] hover:shadow-2xl hover:shadow-black/30">

      {/* MAIN SCREENSHOT */}
      {project.images &&
        project.images.length > 0 && (

        <div className="overflow-hidden border-b border-[#2A2521] bg-[#090909]">

          <img
            src={project.images[0]}
            alt={`${project.title} preview`}
            className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />

        </div>

      )}


      <div className="p-6">

        {/* TOP */}
        <div className="flex items-start justify-between">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E87524]/25 bg-[#E87524]/10 text-[#FF8A32]">

            <Icon size={21} />

          </div>


          <span className="text-xs font-black tracking-[0.18em] text-[#8E837A]">
            {project.number}
          </span>

        </div>


        {/* CONTENT */}
        <div className="mt-7">

          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E87524]">
            {project.category}
          </p>


          <h3 className="mt-3 text-xl font-bold leading-snug text-[#F7F3ED] transition group-hover:text-[#FF8A32]">
            {project.shortTitle}
          </h3>


          <p className="mt-4 text-sm leading-7 text-[#BEB5AC]">
            {project.description}
          </p>

        </div>


        {/* SMALL SCREENSHOTS */}
        {project.images &&
          project.images.length > 1 && (

          <div className="mt-5 grid grid-cols-2 gap-2">

            {project.images
              .slice(1, 3)
              .map((image, index) => (

                <a
                  key={image}
                  href={image}
                  target="_blank"
                  rel="noreferrer"
                  className="overflow-hidden rounded-lg border border-[#332A24] bg-black transition hover:border-[#E87524]/60"
                >

                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 2}`}
                    className="aspect-video w-full object-cover transition duration-300 hover:scale-105"
                  />

                </a>

              ))}

          </div>

        )}


        {/* TECHNOLOGIES */}
        <div className="mt-6 flex flex-wrap gap-2">

          {project.technologies
            .slice(0, 6)
            .map(
              (technology) => (

                <span
                  key={technology}
                  className="rounded-md border border-[#332A24] bg-[#0E0C0B] px-2.5 py-1.5 text-[11px] font-medium text-[#C9C0B7]"
                >
                  {technology}
                </span>

              ),
            )}

        </div>


        {/* FOOTER */}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#2A2521] pt-5">

          <span className="text-xs font-semibold text-[#AAA198]">
            {project.status}
          </span>


          <div className="flex flex-wrap items-center gap-4">

            {/* GITHUB */}
            {project.github && (

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} GitHub`}
                className="flex items-center gap-2 text-xs font-bold text-[#D8D0C7] transition hover:text-[#FF8A32]"
              >

                <FaGithub size={17} />

                GitHub

              </a>

            )}


            {/* RESEARCH PAPER */}
            {project.paper && (

              <a
                href={project.paper}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} Research Paper`}
                className="flex items-center gap-2 text-xs font-bold text-[#D8D0C7] transition hover:text-[#FF8A32]"
              >

                <FileText size={16} />

                Research

              </a>

            )}

          </div>

        </div>

      </div>

    </article>
  );
}