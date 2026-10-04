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

      <section
        id="experience"
        className="scroll-mt-20 border-t border-[#241F1B] bg-[#0D0C0B] px-5 py-20 sm:px-6 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#FF8A32]">
              Experience
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-[#F7F3ED] md:text-5xl">
              Building across
              <span className="text-[#E87524]"> intelligent systems.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {[
              {
                title: "Freelance AI Automation Developer",
                meta: "Current",
                text: "GoHighLevel, n8n, Make, Zapier, Vapi, Retell, Python, webhooks, and CRM/workflow automation.",
              },
              {
                title: "Robotics Intern — BrainSwarm Robotics Lab",
                meta: "Robotics",
                text: "Robotics and autonomous-systems experience across navigation, sensing, and control.",
              },
              {
                title: "Machine Learning Intern — FlyRank",
                meta: "Machine Learning",
                text: "Applied machine learning work focused on prioritization, evaluation, and measurable model results.",
              },
              {
                title: "Generative AI Intern — Aspire Pakistan",
                meta: "Generative AI",
                text: "Generative AI project experience and practical AI workflow development.",
              },
              {
                title: "Generative AI Intern — Arch Technologies",
                meta: "Generative AI",
                text: "Generative AI implementation experience across intelligent software workflows.",
              },
              {
                title: "Voice Agent Project Contributor",
                meta: "Startup project",
                text: "Contribution to a voice-agent project connecting conversational AI with practical user workflows.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#2A2521] bg-[#12100E] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E87524]/50"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF8A32]">{item.meta}</p>
                <h3 className="mt-4 text-xl font-bold text-[#F7F3ED]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#AAA198]">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
            <article className="rounded-2xl border border-[#2A2521] bg-[#12100E] p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8A32]">Education</p>
              <h3 className="mt-4 text-2xl font-black text-[#F7F3ED]">B.Sc. Computer Engineering</h3>
              <p className="mt-2 text-[#D8D0C7]">University of Engineering and Technology (UET), Taxila</p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-[#AAA198]">
                <span className="rounded-lg border border-[#332A24] px-3 py-2">2023–2027</span>
                <span className="rounded-lg border border-[#332A24] px-3 py-2">CGPA 3.31 / 4.00 through 6th semester</span>
              </div>
            </article>
            <article className="rounded-2xl border border-[#2A2521] bg-[#12100E] p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8A32]">Selected achievements</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#D8D0C7]">
                <li>First Runner-Up — Inter-University National AI Hackathon (AUREX 2026)</li>
                <li>IBM Bob 2.0 Hackathon — project participation / submission</li>
                <li>Pak Angels Generative & Agentic AI Training Cohort 11 — Mid Hackathon participation</li>
                <li>Pak Angels Generative & Agentic AI Training Cohort 11 — Final Hackathon 2 participation</li>
                <li>Aspire Leaders Program — Alumni</li>
              </ul>
            </article>
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
                I enjoy building systems where software intelligence interacts
                with real-world devices, machines, and business processes.
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