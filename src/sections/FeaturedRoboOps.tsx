import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Camera,
  Database,
  FileText,
  Navigation,
  Workflow,
} from "lucide-react";

import {
  FaGithub,
} from "react-icons/fa";


const architecture = [

  {
    icon: BrainCircuit,
    label: "Local AI Planning",
  },

  {
    icon: Bot,
    label: "ROS2 Mission Worker",
  },

  {
    icon: Navigation,
    label: "Nav2 Navigation",
  },

  {
    icon: Camera,
    label: "Computer Vision",
  },

  {
    icon: Workflow,
    label: "n8n Automation",
  },

  {
    icon: Database,
    label: "PostgreSQL",
  },

  {
    icon: FileText,
    label: "PDF Mission Report",
  },

];


export default function FeaturedRoboOps() {

  return (
    <section
      id="featured"
      className="scroll-mt-20 border-t border-[#241F1B] bg-[#0B0A09] px-6 py-28"
    >

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="max-w-4xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#E87524]/30 bg-[#E87524]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF8A32]">

            <Bot size={14} />

            Flagship Project

          </div>


          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#F7F3ED] md:text-6xl">

            RoboOps AI

            <span className="block text-[#E87524]">
              Autonomous Robot Operations
            </span>

          </h2>


          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#BEB5AC]">

            An AI-powered robot operations platform
            connecting natural-language mission planning,
            ROS2, Nav2, computer vision, live telemetry,
            n8n automation, PostgreSQL and automated
            mission reporting.

          </p>

        </div>


        {/* VIDEO */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-[#332A24] bg-[#12100E] p-3 shadow-2xl shadow-black/50">

          <div className="overflow-hidden rounded-[20px] bg-black">

            <video
              controls
              preload="metadata"
              playsInline
              className="aspect-video w-full bg-black object-contain"
            >

              <source
                src="/projects/roboops/roboops-demo.mp4"
                type="video/mp4"
              />

              Your browser does not support
              the video element.

            </video>

          </div>

        </div>


        {/* DETAILS */}
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">

          {/* WHAT I BUILT */}
          <div className="rounded-2xl border border-[#2A2521] bg-[#12100E] p-7 md:p-8">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8A32]">
              What I Built
            </p>


            <h3 className="mt-4 text-2xl font-black text-[#F7F3ED]">
              From natural language to autonomous execution.
            </h3>


            <p className="mt-5 leading-8 text-[#BEB5AC]">

              A mission can be submitted in normal
              language and converted by a local AI model
              into structured robot actions.

            </p>


            <p className="mt-4 leading-8 text-[#BEB5AC]">

              After approval, the ROS2 mission worker
              executes Nav2 navigation in Gazebo,
              performs visual inspection, captures
              evidence, streams telemetry and triggers
              automation for mission records and reporting.

            </p>


            <div className="mt-7 flex flex-wrap gap-2">

              {[
                "ROS2 Humble",
                "Nav2",
                "Gazebo",
                "OpenCV",
                "FastAPI",
                "React",
                "PostgreSQL",
                "n8n",
                "Docker",
                "Ollama",
                "Qwen2",
              ].map(
                (technology) => (

                  <span
                    key={technology}
                    className="rounded-lg border border-[#332A24] bg-[#0E0C0B] px-3 py-2 text-xs font-medium text-[#D8D0C7] transition hover:border-[#E87524]/50 hover:text-[#FF8A32]"
                  >
                    {technology}
                  </span>

                ),
              )}

            </div>


            <a
              href="https://github.com/Malang43/-roboops-ai"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#E87524] px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-[#FF8A32]"
            >

              <FaGithub size={18} />

              View Source Code

              <ArrowUpRight size={17} />

            </a>

          </div>


          {/* ARCHITECTURE */}
          <div className="rounded-2xl border border-[#2A2521] bg-[#12100E] p-7 md:p-8">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8A32]">
              System Architecture
            </p>


            <h3 className="mt-4 text-2xl font-black text-[#F7F3ED]">
              Connected end-to-end workflow
            </h3>


            <div className="mt-8">

              {architecture.map(
                ({
                  icon: Icon,
                  label,
                }, index) => (

                  <div
                    key={label}
                    className="relative"
                  >

                    <div className="group flex items-center gap-4 rounded-xl border border-[#2A2521] bg-[#151210] p-4 transition hover:border-[#E87524]/50 hover:bg-[#181512]">

                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E87524]/10 text-[#FF8A32]">

                        <Icon size={18} />

                      </div>


                      <span className="font-semibold text-[#E7E0D8] transition group-hover:text-[#FF8A32]">
                        {label}
                      </span>

                    </div>


                    {index <
                      architecture.length - 1 && (

                      <div className="ml-[35px] h-5 w-px bg-[#55301B]" />

                    )}

                  </div>

                ),
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}