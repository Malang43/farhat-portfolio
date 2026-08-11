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
    title: "AI & Machine Learning",
    description:
      "Machine learning, intelligent search, speech processing and data-driven systems.",
    skills: [
      "Python",
      "Scikit-learn",
      "Machine Learning",
      "Whisper",
      "NLP",
      "Recommendation Systems",
      "Logistic Regression",
      "Fuzzy Search",
    ],
  },

  {
    icon: Workflow,
    title: "Automation & AI Agents",
    description:
      "Business automation, CRM systems and intelligent workflow development.",
    skills: [
      "n8n",
      "GoHighLevel",
      "AI Agents",
      "Apollo",
      "Webhooks",
      "Python Automation",
      "CRM Automation",
    ],
  },

  {
    icon: Bot,
    title: "Robotics & Autonomous Systems",
    description:
      "Autonomous navigation, robot software, sensing and intelligent robot control.",
    skills: [
      "ROS2",
      "Nav2",
      "Gazebo",
      "Jetson Nano",
      "LiDAR",
      "GPS",
      "Encoders",
      "OpenCV",
    ],
  },

  {
    icon: Cpu,
    title: "Embedded & Edge AI",
    description:
      "Embedded computing, sensor integration and machine learning at the edge.",
    skills: [
      "ESP32",
      "Edge Impulse",
      "Edge AI",
      "Embedded ML",
      "Sensor Integration",
      "Motor Control",
    ],
  },

  {
    icon: Code2,
    title: "Software Development",
    description:
      "Building interfaces, APIs and software that connect intelligent systems.",
    skills: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "REST APIs",
      "Git",
      "GitHub",
    ],
  },

  {
    icon: Database,
    title: "Backend & Infrastructure",
    description:
      "Backend services, databases, containers and connected system infrastructure.",
    skills: [
      "PostgreSQL",
      "Redis",
      "Docker",
      "Linux",
      "API Integration",
    ],
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
            Skills organized by
            <span className="text-[#E87524]">
              {" "}engineering domain.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#BEB5AC]">
            My technical work spans intelligent software,
            automation, robotics and embedded systems.
            These are the core technologies I use across
            my projects.
          </p>

        </div>


        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map(
            ({
              icon: Icon,
              title,
              description,
              skills,
            }) => (

              <article
                key={title}
                className="group rounded-2xl border border-[#2A2521] bg-[#12100E] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#E87524]/50 hover:bg-[#181512]"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E87524]/25 bg-[#E87524]/10 text-[#FF8A32] transition group-hover:scale-110">
                  <Icon size={21} />
                </div>


                <h3 className="mt-6 text-xl font-bold text-[#F7F3ED] transition group-hover:text-[#FF8A32]">
                  {title}
                </h3>


                <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#AAA198]">
                  {description}
                </p>


                <div className="mt-6 flex flex-wrap gap-2">

                  {skills.map((skill) => (

                    <span
                      key={skill}
                      className="rounded-md border border-[#332A24] bg-[#0E0C0B] px-3 py-1.5 text-xs font-medium text-[#C9C0B7] transition hover:border-[#E87524]/50 hover:text-[#FF8A32]"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </article>

            ),
          )}

        </div>

      </div>
    </section>
  );
}