export type ProjectCategory =
  | "Agentic AI"
  | "Robotics"
  | "Machine Learning"
  | "Automation"
  | "Edge AI";

export interface Project {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  evidence?: string;
  featured?: boolean;
  github?: string;
  live?: string;
  paper?: string;
  video?: string;
  images?: string[];
  status?: string;
}

export const projects: Project[] = [
  {
    id: "watchmywork",
    number: "01",
    title: "WatchMyWork — Adaptive Agentic Browser Automation",
    shortTitle: "WatchMyWork",
    category: "Agentic AI",
    featured: true,
    description:
      "Show a browser workflow once. WatchMyWork learns it, runs it across your data, and adapts when the website changes.",
    evidence:
      "Adaptive recovery: Login → Sign In, with a reason, confidence, approval step, and remembered mapping.",
    technologies: ["React", "Playwright", "FastAPI", "Chrome Extension", "Nemotron", "SQLite"],
    github: "https://github.com/Malang43/WatchMyWork",
    live: "https://watchmywork-production.up.railway.app",
    status: "IBM Bob 2.0 Hackathon submission",
  },
  {
    id: "roboops-ai",
    number: "02",
    title: "RoboOps AI — Autonomous Robot Operations Platform",
    shortTitle: "RoboOps AI",
    category: "Robotics",
    featured: true,
    description:
      "An end-to-end platform connecting local AI mission planning, human approval, ROS2/Nav2, vision, telemetry, automation, and mission reporting.",
    evidence: "AI plan → approval → ROS2/Nav2 → vision → automation → PDF mission report.",
    technologies: ["ROS2", "Nav2", "Gazebo", "OpenCV", "FastAPI", "PostgreSQL"],
    github: "https://github.com/Malang43/-roboops-ai",
    video: "/projects/roboops/roboops-demo.mp4",
    status: "Completed",
  },
  {
    id: "dothis-ai-action-engine",
    number: "03",
    title: "DoThis — AI Action Engine",
    shortTitle: "DoThis",
    category: "Agentic AI",
    featured: true,
    description:
      "An agentic execution platform that turns notes, emails, PDFs, images, and ideas into approved tasks, priorities, schedules, and trackable progress.",
    evidence:
      "Human-in-the-loop flow: input → Qwen plan → validation → schedule → approval → Calendar/Gmail execution.",
    technologies: ["Next.js", "FastAPI", "Qwen 2.5", "Supabase", "n8n", "Google APIs"],
    github: "https://github.com/Malang43/DoThis-AI-Action-Engine",
    status: "Hackathon project",
  },
  {
    id: "flyrank-ml-capstone",
    number: "04",
    title: "FlyRank ML Capstone — Content Performance Decline Prioritization",
    shortTitle: "FlyRank ML Capstone",
    category: "Machine Learning",
    featured: true,
    description:
      "An end-to-end machine-learning system using pseudonymized search data to prioritize pages for content review.",
    evidence: "Precision@50 improved from 0.48 to 0.66 — a 37.5% relative improvement.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Logistic Regression", "Random Forest", "Gradient Boosting"],
    images: [
      "/projects/flyrank-ml/model-comparison.PNG",
      "/projects/flyrank-ml/validation-comparison.PNG",
      "/projects/flyrank-ml/workflow.PNG",
    ],
    github: "https://github.com/Malang43/flyrank-ml-internship-Malang43",
    paper: "https://malang43.github.io/flyrank-ml-internship-Malang43/",
    status: "Completed",
  },
  {
    id: "ugv-mobile-robot",
    number: "05",
    title: "UGV Mobile Robot & Custom Control Dashboard",
    shortTitle: "UGV Mobile Robot",
    category: "Robotics",
    description:
      "A mobile robotic platform integrating Jetson Nano, LiDAR, GPS, encoders, embedded motor control, and a monitoring dashboard.",
    evidence: "Hardware-aware autonomy stack spanning sensing, control, navigation, and operator feedback.",
    technologies: ["ROS2", "Jetson Nano", "LiDAR", "GPS", "Encoders", "ESP32"],
    images: ["/projects/ugv/ugv-robot.jpeg"],
    status: "In Development",
  },
  {
    id: "edge-ai-health",
    number: "06",
    title: "Edge AI Pulse-Oximeter Classification",
    shortTitle: "Edge AI + Edge Impulse",
    category: "Edge AI",
    description:
      "An embedded machine-learning project using pulse-oximeter sensor data, feature processing, and edge inference.",
    evidence: "Custom logistic-regression inference pipeline designed for constrained hardware.",
    technologies: ["Edge Impulse", "Logistic Regression", "ESP32", "Sensor Data", "Embedded ML"],
    status: "Completed",
  },
  {
    id: "phonetic-search",
    number: "07",
    title: "AI Phonetic Search & Speech Recognition System",
    shortTitle: "Phonetic Search + Whisper",
    category: "Machine Learning",
    description:
      "A speech-enabled search system combining Whisper, phonetic processing, similarity matching, and recommendation logic.",
    evidence: "Improves search from spoken or imperfect input through transcription and fuzzy semantic matching.",
    technologies: ["Python", "Whisper", "Speech Recognition", "Phonetic Matching", "NLP", "Fuzzy Matching"],
    images: [
      "/projects/phonetic-search/phonetic-search-interface.PNG",
      "/projects/phonetic-search/speech-search-result.PNG",
      "/projects/phonetic-search/whisper-processing.png",
    ],
    status: "Completed",
  },
  {
    id: "recommendation-system",
    number: "08",
    title: "Machine Learning Recommendation System",
    shortTitle: "Recommendation System",
    category: "Machine Learning",
    description:
      "A recommendation pipeline covering preprocessing, similarity analysis, model development, evaluation, and ranked output.",
    evidence: "Complete model-to-ranking workflow with evaluation artifacts and recommendation results.",
    technologies: ["Python", "Scikit-learn", "Data Analysis", "Recommendation Systems"],
    images: [
      "/projects/recommendation/model-performance.png",
      "/projects/recommendation/evaluation-graph.png",
      "/projects/recommendation/recommendation-results.png",
    ],
    status: "Completed",
  },
  {
    id: "apollo-n8n-ghl",
    number: "09",
    title: "Apollo → n8n → GoHighLevel Automation",
    shortTitle: "Apollo + n8n + GHL",
    category: "Automation",
    description:
      "An automated lead-processing workflow that transforms lead data, synchronizes CRM records, and triggers downstream actions.",
    technologies: ["n8n", "GoHighLevel", "Apollo", "Webhooks", "CRM Automation"],
    status: "Completed",
  },
  {
    id: "bilingual-agent",
    number: "10",
    title: "French & English Bilingual AI Agent",
    shortTitle: "Bilingual AI Agent",
    category: "Automation",
    description:
      "A bilingual AI workflow connecting conversational intelligence with automated business processes in French and English.",
    technologies: ["AI Agents", "n8n", "GoHighLevel", "French", "English"],
    status: "Completed",
  },
  {
    id: "hospitality-agent",
    number: "11",
    title: "Hotel & Restaurant AI Automation Agent",
    shortTitle: "Hospitality AI Agent",
    category: "Automation",
    description:
      "An AI-powered hospitality workflow for inquiries, CRM updates, and automated follow-up processes.",
    technologies: ["GoHighLevel", "n8n", "AI Agents", "CRM", "Workflow Automation"],
    status: "Completed",
  },
];
