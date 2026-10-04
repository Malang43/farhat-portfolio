import {
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Workflow,
} from "lucide-react";

const skillGroups = [
  {
    icon: BrainCircuit,
    title: "AI / Machine Learning",
    description: "Models and retrieval systems for language, speech, search, and prediction.",
    skills: ["Python", "Machine Learning", "Generative AI", "RAG", "Hugging Face", "FAISS", "Whisper"],
  },
  {
    icon: Workflow,
    title: "Agentic AI & Automation",
    description: "Human-approved agents and workflows that connect reasoning to external actions.",
    skills: ["AI Agents", "Playwright", "Chrome Extensions", "OpenRouter", "Tavily", "n8n", "GoHighLevel", "Webhooks"],
  },
  {
    icon: Bot,
    title: "Robotics & Autonomous Systems",
    description: "Navigation, sensing, control, and telemetry for autonomous machines.",
    skills: ["ROS2", "Nav2", "SLAM", "Gazebo", "NVIDIA Jetson", "LiDAR", "GPS / Encoders"],
  },
  {
    icon: Cpu,
    title: "Embedded & Edge AI",
    description: "Sensor-aware machine learning and inference on constrained devices.",
    skills: ["ESP32", "Edge Impulse", "Embedded ML", "Sensor Integration", "Motor Control"],
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Interfaces and APIs that make intelligent systems usable.",
    skills: ["React", "TypeScript", "FastAPI", "Python", "REST APIs", "Git / GitHub"],
  },
  {
    icon: Database,
    title: "Backend / Infrastructure",
    description: "Storage, deployment, and connected services for reliable applications.",
    skills: ["PostgreSQL", "SQLite", "Docker", "Linux", "Railway"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-[#241F1B] bg-[#0B0A09] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#FF8A32]">
            Technical Expertise
          </p>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-[#F7F3ED] md:text-5xl">
            Tools for building
            <span className="text-[#E87524]"> complete systems.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#BEB5AC]">
            A focused toolkit shaped by the systems shown in this portfolio,
            from agentic workflows and ML pipelines to robots and edge devices.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ icon: Icon, title, description, skills }) => (
            <article
              key={title}
              className="group rounded-2xl border border-[#2A2521] bg-[#12100E] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#E87524]/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E87524]/25 bg-[#E87524]/10 text-[#FF8A32]">
                <Icon size={21} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#F7F3ED] group-hover:text-[#FF8A32]">
                {title}
              </h3>
              <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#AAA198]">
                {description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[#332A24] bg-[#0E0C0B] px-3 py-1.5 text-xs font-medium text-[#C9C0B7]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
