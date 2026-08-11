import {
  ArrowRight,
  GraduationCap,
  Network,
} from "lucide-react";

import {
  FaGithub,
} from "react-icons/fa";

import {
  socialLinks,
} from "../data/socialLinks";


export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0B0A09] pt-24"
    >

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute right-[-80px] top-[80px] h-[620px] w-[620px] rounded-full bg-[#A94712]/[0.13] blur-[170px]" />

        <div className="absolute bottom-[-180px] left-[-160px] h-[500px] w-[500px] rounded-full bg-[#7A3210]/[0.08] blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

      </div>


      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-[1.15fr_.85fr]">

        {/* LEFT */}
        <div>

          <p className="mb-4 text-lg font-medium text-[#D8D0C7]">
            Hi, I'm
          </p>


          <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.04em] text-[#F7F3ED] sm:text-6xl lg:text-7xl">

            M Farhat

            <span className="block text-[#E87524]">
              Mehdi
            </span>

          </h1>


          <div className="mt-7 flex flex-wrap items-center gap-3">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#E87524]/30 bg-[#E87524]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#FF954D]">

              <GraduationCap size={15} />

              Computer Engineering Student

            </div>


            <div className="inline-flex items-center gap-2 rounded-full border border-[#332A24] bg-[#151210] px-4 py-2 text-xs font-semibold text-[#D8D0C7]">

              <Network
                size={14}
                className="text-[#E87524]"
              />

              Intelligent Systems Developer

            </div>

          </div>


          <h2 className="mt-8 max-w-3xl text-2xl font-semibold leading-[1.4] text-[#E7E0D8] md:text-3xl">

            Building intelligent systems across

            <span className="text-[#FF8A32]">
              {" "}AI, automation, robotics and embedded technology.
            </span>

          </h2>


          <p className="mt-6 max-w-3xl text-base leading-8 text-[#BEB5AC] md:text-lg">

            I combine software intelligence with real-world
            systems — developing machine-learning applications,
            AI automation, autonomous robotics and embedded
            intelligent solutions.

          </p>


          {/* ONLY HIGH-LEVEL DOMAINS */}
          <div className="mt-8 flex flex-wrap gap-2">

            {[
              "AI & Machine Learning",
              "Automation",
              "Robotics",
              "Embedded Systems",
            ].map((area) => (

              <span
                key={area}
                className="rounded-lg border border-[#332A24] bg-[#151210] px-4 py-2 text-sm font-medium text-[#D8D0C7]"
              >
                {area}
              </span>

            ))}

          </div>


          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-[#E87524] px-6 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:bg-[#FF8A32]"
            >

              Explore My Work

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </a>


            <a
              href="#skills"
              className="rounded-xl border border-[#332A24] bg-[#151210] px-6 py-3.5 font-semibold text-[#E7E0D8] transition hover:-translate-y-1 hover:border-[#E87524]/60 hover:text-[#FF8A32]"
            >
              View Skills
            </a>


            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-[#332A24] bg-[#151210] px-5 py-3.5 font-semibold text-[#E7E0D8] transition hover:-translate-y-1 hover:border-[#E87524]/60 hover:text-[#FF8A32]"
            >

              <FaGithub size={18} />

              GitHub

            </a>

          </div>

        </div>


        {/* PROFILE */}
        <div className="relative mx-auto w-full max-w-[440px]">

          <div className="absolute -inset-7 rounded-[45px] bg-[#A94712]/[0.12] blur-3xl" />


          <div className="relative rounded-[30px] border border-[#332A24] bg-[#12100E] p-3 shadow-2xl shadow-black/60">

            <div className="relative overflow-hidden rounded-[23px] bg-[#181512]">

              <img
                src="/profile/farhat-profile.png"
                alt="M Farhat Mehdi"
                className="aspect-[4/5] w-full object-cover object-center transition duration-700 hover:scale-[1.03]"
              />


              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/75 to-transparent px-6 pb-7 pt-28">

                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF8A32]">
                  Computer Engineering
                </p>

                <p className="mt-2 text-xl font-bold text-[#F7F3ED]">
                  AI × Automation × Robotics
                </p>

              </div>

            </div>


            <div className="grid grid-cols-3 gap-2 pt-3">

              {[
                ["AI", "Intelligence"],
                ["ROS2", "Robotics"],
                ["n8n", "Automation"],
              ].map(([title, subtitle]) => (

                <div
                  key={title}
                  className="rounded-xl border border-[#2A2521] bg-[#151210] p-3 text-center transition hover:border-[#E87524]/50"
                >

                  <p className="text-sm font-bold text-[#FF8A32]">
                    {title}
                  </p>

                  <p className="mt-1 text-[10px] text-[#AAA198]">
                    {subtitle}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}