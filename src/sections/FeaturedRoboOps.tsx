import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Camera,
  FileText,
  Navigation,
  Workflow,
} from "lucide-react";

import {
  FaGithub,
} from "react-icons/fa";


const systemFlow = [
  {
    icon: BrainCircuit,
    label: "AI Planning",
  },
  {
    icon: Navigation,
    label: "ROS2 + Nav2",
  },
  {
    icon: Camera,
    label: "Vision + Telemetry",
  },
  {
    icon: Workflow,
    label: "Automation",
  },
  {
    icon: FileText,
    label: "Mission Report",
  },
];


export default function FeaturedRoboOps() {

  return (
    <section
      id="featured"
      className="scroll-mt-20 border-t border-[#241F1B] bg-[#0B0A09] px-5 py-20 sm:px-6 md:py-28"
    >

      <div className="mx-auto max-w-7xl">


        {/* HEADER */}
        <div className="max-w-4xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#E87524]/30 bg-[#E87524]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF8A32]">

            <Bot size={14} />

            Flagship Project

          </div>


          <h2 className="mt-6 text-3xl font-black tracking-tight text-[#F7F3ED] sm:text-4xl md:text-6xl">

            RoboOps AI

            <span className="block text-[#E87524]">
              Autonomous Robot Operations
            </span>

          </h2>


          <p className="mt-5 max-w-3xl text-base leading-7 text-[#BEB5AC] sm:text-lg sm:leading-8">

            An autonomous robot operations platform that
            turns natural-language missions into approved
            ROS2/Nav2 actions, visual inspection, telemetry,
            automation and mission reporting.

          </p>

        </div>


        {/* VIDEO */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#332A24] bg-[#12100E] p-2 shadow-2xl shadow-black/50 sm:p-3 md:mt-14 md:rounded-3xl">

          <div className="overflow-hidden rounded-xl bg-black sm:rounded-[20px]">

            <video
              controls
              preload="none"
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


        {/* COMPACT DETAILS */}
        <div className="mt-6 grid gap-5 lg:grid-cols-[1.15fr_.85fr] md:mt-8">


          {/* WHAT I BUILT */}
          <div className="rounded-2xl border border-[#2A2521] bg-[#12100E] p-6 md:p-8">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8A32]">
              What I Built
            </p>


            <h3 className="mt-4 text-xl font-black text-[#F7F3ED] sm:text-2xl">
              AI planning to autonomous execution.
            </h3>


            <p className="mt-4 leading-7 text-[#BEB5AC]">

              I connected a local AI planning layer to ROS2,
              Nav2, computer vision, telemetry, PostgreSQL
              and n8n. After human approval, the robot
              executes the mission, captures evidence and
              produces a mission record.

            </p>


            {/* CORE TECHNOLOGIES */}
            <div className="mt-6 flex flex-wrap gap-2">

              {[
                "ROS2",
                "Nav2",
                "OpenCV",
                "FastAPI",
                "PostgreSQL",
                "n8n",
              ].map(
                (technology) => (

                  <span
                    key={technology}
                    className="rounded-lg border border-[#332A24] bg-[#0E0C0B] px-3 py-2 text-xs font-medium text-[#D8D0C7]"
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
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#E87524] px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-[#FF8A32]"
            >

              <FaGithub size={18} />

              View Source Code

              <ArrowUpRight size={17} />

            </a>

          </div>


          {/* SYSTEM FLOW */}
          <div className="rounded-2xl border border-[#2A2521] bg-[#12100E] p-6 md:p-8">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8A32]">
              System Flow
            </p>


            <h3 className="mt-4 text-xl font-black text-[#F7F3ED] sm:text-2xl">
              One connected workflow.
            </h3>


            <p className="mt-4 leading-7 text-[#BEB5AC]">

              The demo shows the full loop from planning
              and approval to robot execution, inspection
              and reporting.

            </p>


            <div className="mt-6 flex flex-wrap gap-2">

              {systemFlow.map(
                ({
                  icon: Icon,
                  label,
                }) => (

                  <div
                    key={label}
                    className="flex min-h-11 items-center gap-2 rounded-xl border border-[#332A24] bg-[#151210] px-3.5 py-2.5 text-sm font-semibold text-[#E7E0D8]"
                  >

                    <Icon
                      size={16}
                      className="shrink-0 text-[#FF8A32]"
                    />

                    {label}

                  </div>

                ),
              )}

            </div>


            <p className="mt-6 text-sm font-semibold text-[#AAA198]">

              AI Plan → Approval → ROS2/Nav2 →
              Vision → Automation → Report

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}