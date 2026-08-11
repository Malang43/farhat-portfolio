import {
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";


import Navbar
  from "./components/Navbar";

import Hero
  from "./sections/Hero";

import FeaturedRoboOps
  from "./sections/FeaturedRoboOps";

import Projects
  from "./sections/Projects";

import Skills
  from "./sections/Skills";

import {
  socialLinks,
} from "./data/socialLinks";


function App() {

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0B0A09] text-[#F7F3ED]">


      {/* NAVIGATION */}
      <Navbar />


      {/* INTRODUCTION */}
      <Hero />


      {/* FLAGSHIP PROJECT */}
      <FeaturedRoboOps />


      {/* PROJECT PORTFOLIO */}
      <Projects />


      {/* CENTRAL SKILLS SECTION */}
      <Skills />


      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-20 border-t border-[#241F1B] bg-[#0D0C0B] px-6 py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">


            {/* LEFT */}
            <div>

              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#FF8A32]">
                About Me
              </p>


              <h2 className="mt-5 text-4xl font-black leading-tight text-[#F7F3ED] md:text-5xl">

                Computer Engineering

                <span className="block text-[#E87524]">
                  focused on intelligent systems.
                </span>

              </h2>

            </div>


            {/* RIGHT */}
            <div>

              <p className="text-lg leading-8 text-[#D8D0C7]">

                I'm a Computer Engineering student interested
                in building systems where software intelligence
                interacts with real-world devices, machines and
                business processes.

              </p>


              <p className="mt-6 text-base leading-8 text-[#BEB5AC]">

                My projects range from machine-learning and
                speech-based applications to autonomous robots,
                embedded intelligence and AI-driven automation.
                I enjoy taking an idea beyond an isolated model
                or script and developing it into a complete,
                usable system.

              </p>


              <p className="mt-6 text-base leading-8 text-[#BEB5AC]">

                My approach combines software development,
                artificial intelligence, robotics, automation
                and hardware integration while keeping the
                focus on practical problem solving and
                end-to-end implementation.

              </p>


              <div className="mt-9 grid gap-3 sm:grid-cols-3">

                <div className="rounded-xl border border-[#2A2521] bg-[#12100E] p-5 transition hover:border-[#E87524]/50">

                  <p className="text-xs uppercase tracking-[0.16em] text-[#AAA198]">
                    Focus
                  </p>

                  <p className="mt-2 font-bold text-[#F7F3ED]">
                    Intelligent Systems
                  </p>

                </div>


                <div className="rounded-xl border border-[#2A2521] bg-[#12100E] p-5 transition hover:border-[#E87524]/50">

                  <p className="text-xs uppercase tracking-[0.16em] text-[#AAA198]">
                    Background
                  </p>

                  <p className="mt-2 font-bold text-[#F7F3ED]">
                    Computer Engineering
                  </p>

                </div>


                <div className="rounded-xl border border-[#2A2521] bg-[#12100E] p-5 transition hover:border-[#E87524]/50">

                  <p className="text-xs uppercase tracking-[0.16em] text-[#AAA198]">
                    Approach
                  </p>

                  <p className="mt-2 font-bold text-[#F7F3ED]">
                    Build End-to-End
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-20 border-t border-[#241F1B] bg-[#0B0A09] px-6 py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-3xl border border-[#332A24] bg-[#12100E] p-8 md:p-14 lg:p-16">


            {/* BACKGROUND GLOW */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-[#A94712]/10 blur-[130px]" />


            <div className="relative">

              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#FF8A32]">
                Let's Connect
              </p>


              <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-[#F7F3ED] md:text-5xl">

                Have an AI, automation,
                machine-learning or robotics project?

              </h2>


              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#BEB5AC]">

                Connect with me through WhatsApp,
                LinkedIn, GitHub, Upwork or Fiverr.

              </p>


              {/* WHATSAPP */}
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#E87524] px-7 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:bg-[#FF8A32]"
              >

                <FaWhatsapp size={21} />

                WhatsApp

                <span className="font-medium text-white/80">
                  {socialLinks.whatsappNumber}
                </span>

              </a>


              {/* PROFESSIONAL LINKS */}
              <div className="mt-6 flex flex-wrap gap-3">

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 rounded-xl border border-[#332A24] bg-[#151210] px-5 py-3 font-semibold text-[#D8D0C7] transition hover:-translate-y-1 hover:border-[#E87524]/60 hover:text-[#FF8A32]"
                >

                  <FaLinkedin size={18} />

                  LinkedIn

                  <ArrowUpRight size={15} />

                </a>


                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 rounded-xl border border-[#332A24] bg-[#151210] px-5 py-3 font-semibold text-[#D8D0C7] transition hover:-translate-y-1 hover:border-[#E87524]/60 hover:text-[#FF8A32]"
                >

                  <FaGithub size={18} />

                  GitHub

                  <ArrowUpRight size={15} />

                </a>


                <a
                  href={socialLinks.upwork}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 rounded-xl border border-[#332A24] bg-[#151210] px-5 py-3 font-semibold text-[#D8D0C7] transition hover:-translate-y-1 hover:border-[#E87524]/60 hover:text-[#FF8A32]"
                >

                  Upwork

                  <ArrowUpRight size={15} />

                </a>


                <a
                  href={socialLinks.fiverr}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 rounded-xl border border-[#332A24] bg-[#151210] px-5 py-3 font-semibold text-[#D8D0C7] transition hover:-translate-y-1 hover:border-[#E87524]/60 hover:text-[#FF8A32]"
                >

                  Fiverr

                  <ArrowUpRight size={15} />

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-[#241F1B] bg-[#080706] px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#8F857C] sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 M Farhat Mehdi
          </p>

          <p>
            AI · Automation · Machine Learning · Robotics
          </p>

        </div>

      </footer>

    </main>
  );
}


export default App;