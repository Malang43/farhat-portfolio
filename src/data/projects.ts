export type ProjectCategory =
  | "Robotics"
  | "Machine Learning"
  | "Automation"
  | "Embedded";


export interface Project {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];

  featured?: boolean;
  github?: string;
  video?: string;
  images?: string[];
  status?: string;
}


export const projects: Project[] = [

  {
    id: "roboops-ai",

    number: "01",

    title:
      "RoboOps AI — Autonomous Robot Operations Platform",

    shortTitle:
      "RoboOps AI",

    category:
      "Robotics",

    featured:
      true,

    description:
      "An end-to-end autonomous robot operations platform connecting local AI mission planning, human approval, ROS2, Nav2, Gazebo, computer vision, live telemetry, n8n automation, PostgreSQL and automatic PDF mission reporting.",

    technologies: [
      "ROS2",
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
    ],

    github:
      "https://github.com/Malang43/-roboops-ai",

    video:
      "/projects/roboops/roboops-demo.mp4",

    status:
      "Completed",
  },


  {
    id:
      "phonetic-search",

    number:
      "02",

    title:
      "AI Phonetic Search & Speech Recognition System",

    shortTitle:
      "Phonetic Search + Whisper",

    category:
      "Machine Learning",

    description:
      "A speech-enabled intelligent search system combining Whisper speech recognition, phonetic processing, similarity matching and recommendation logic to improve search from spoken or imperfect input.",

    technologies: [
      "Python",
      "Whisper",
      "Speech Recognition",
      "Phonetic Matching",
      "NLP",
      "Fuzzy Matching",
    ],

   images: [
  "/projects/phonetic-search/phonetic-search-interface.PNG",
  "/projects/phonetic-search/speech-search-result.PNG",
  "/projects/phonetic-search/whisper-processing.png",
],

    status:
      "Completed",
  },


  {
    id:
      "recommendation-system",

    number:
      "03",

    title:
      "Machine Learning Recommendation System",

    shortTitle:
      "Recommendation System",

    category:
      "Machine Learning",

    description:
      "A machine-learning recommendation pipeline covering data preprocessing, similarity analysis, model development, evaluation and ranked recommendation generation.",

    technologies: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Data Analysis",
      "Recommendation Systems",
    ],

    images: [
      "/projects/recommendation/model-performance.png",
      "/projects/recommendation/evaluation-graph.png",
      "/projects/recommendation/recommendation-results.png",
      
    ],

    status:
      "Completed",
  },


  {
    id:
      "ugv-mobile-robot",

    number:
      "04",

    title:
      "UGV Mobile Robot & Custom Control Dashboard",

    shortTitle:
      "UGV Mobile Robot",

    category:
      "Robotics",

    description:
      "A mobile robotic platform integrating Jetson Nano, LiDAR, GPS, encoders, embedded motor control and a custom dashboard for robot operation and monitoring.",

    technologies: [
      "ROS2",
      "Jetson Nano",
      "LiDAR",
      "GPS",
      "Encoders",
      "ESP32",
      "Python",
      "Motor Control",
    ],
images: [
  "/projects/ugv/ugv-robot.jpeg",
],
    status:
      "In Development",
  },


  {
    id:
      "edge-ai-health",

    number:
      "05",

    title:
      "Edge AI Pulse-Oximeter Classification",

    shortTitle:
      "Edge AI + Edge Impulse",

    category:
      "Embedded",

    description:
      "An embedded machine-learning project using pulse-oximeter sensor data, feature processing, Edge Impulse and a custom logistic-regression model for edge inference.",

    technologies: [
      "Edge Impulse",
      "Logistic Regression",
      "ESP32",
      "Sensor Data",
      "Embedded ML",
      "Edge AI",
    ],

    status:
      "Completed",
  },


  {
    id:
      "apollo-n8n-ghl",

    number:
      "06",

    title:
      "Apollo → n8n → GoHighLevel Automation",

    shortTitle:
      "Apollo + n8n + GHL",

    category:
      "Automation",

    description:
      "An automated lead-processing workflow connecting Apollo, n8n and GoHighLevel to transform lead data, synchronize CRM records and trigger downstream workflows.",

    technologies: [
      "n8n",
      "GoHighLevel",
      "Apollo",
      "Webhooks",
      "CRM Automation",
      "Python",
    ],

    status:
      "Completed",
  },


  {
    id:
      "bilingual-agent",

    number:
      "07",

    title:
      "French & English Bilingual AI Agent",

    shortTitle:
      "Bilingual AI Agent",

    category:
      "Automation",

    description:
      "A bilingual AI workflow designed to handle French and English conversations while connecting conversational intelligence with automated business processes.",

    technologies: [
      "AI Agents",
      "n8n",
      "GoHighLevel",
      "French",
      "English",
      "Automation",
    ],

    status:
      "Completed",
  },


  {
    id:
      "hospitality-agent",

    number:
      "08",

    title:
      "Hotel & Restaurant AI Automation Agent",

    shortTitle:
      "Hospitality AI Agent",

    category:
      "Automation",

    description:
      "An AI-powered customer engagement workflow for hospitality businesses using GoHighLevel and n8n for inquiries, CRM updates and automated follow-up processes.",

    technologies: [
      "GoHighLevel",
      "n8n",
      "AI Agents",
      "CRM",
      "Workflow Automation",
    ],

    status:
      "Completed",
  },

];