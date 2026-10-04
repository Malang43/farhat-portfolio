import Contact
  from "./sections/Contact";

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

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0B0A09] text-[#F7F3ED]">
      <Navbar />
      <Hero />
      <FeaturedRoboOps />
      <Projects />
      <Skills />

      {/* Keep the timeline concise so visitors can understand the engineering direction quickly. */}
      <section
        id="experience"
        className="scroll-mt-20 border-t border-[#241F1B] bg-[#0D0C0B] px-5 py-20 sm:px-6 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#FF8A32]">
              Experience & direction
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-[#F7F3ED] md:text-5xl">
              From models to
              <span className="text-[#E87524]"> working systems.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#BEB5AC]">
              I build by connecting the full loop: understand the problem,
              design the system, validate the result, then make it usable.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Computer Engineering",
                text: "A hardware-aware foundation for software, embedded systems, and autonomous machines.",
              },
              {
                number: "02",
                title: "Applied AI projects",
                text: "Machine-learning and speech systems evaluated with real datasets, holdouts, and measurable outcomes.",
              },
              {
                number: "03",
                title: "Intelligent operations",
                text: "Agentic workflows and robotics platforms that turn decisions into actions, telemetry, and reports.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-[#2A2521] bg-[#12100E] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E87524]/50"
              >
                <p className="font-mono text-sm font-bold text-[#FF8A32]">{item.number}</p>
                <h3 className="mt-6 text-xl font-bold text-[#F7F3ED]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#AAA198]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-20 border-t border-[#241F1B] bg-[#0D0C0B] px-5 py-20 sm:px-6 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#FF8A32]">
                About Me
              </p>
              <h2 className="mt-5 text-3xl font-black leading-tight text-[#F7F3ED] sm:text-4xl md:text-5xl">
                Computer Engineering
                <span className="block text-[#E87524]">
                  focused on intelligent systems.
                </span>
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-[#D8D0C7] sm:text-lg">
                I&apos;m a Computer Engineering student focused on building
                intelligent systems that connect software, AI, automation,
                robotics, and hardware.
              </p>
              <p className="mt-5 text-base leading-8 text-[#BEB5AC]">
                I enjoy taking projects beyond isolated models or scripts and
                turning them into complete end-to-end systems that solve
                practical problems.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
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
      <Contact />
      <footer className="border-t border-[#241F1B] bg-[#080706] px-5 py-8 sm:px-6">
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