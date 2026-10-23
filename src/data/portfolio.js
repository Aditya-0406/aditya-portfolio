export const profile = {
  name: "Aditya Awate",
  role: "ENTC Engineer · AI & IoT Developer",
  tagline:
    "Bridging hardware, software and intelligent systems, from EEG-based shape recognition to disaster-rescue rovers.",
  location: "Pune, India",
  email: "your-email@example.com", // TODO: replace
  github: "https://github.com/your-username", // TODO: replace
  linkedin: "https://linkedin.com/in/your-username", // TODO: replace
  resumeUrl: "/Aditya_Awate_Resume.pdf", // put the PDF in /public
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 8.01, decimals: 2, suffix: "", label: "CGPA" },
  { value: 90.44, decimals: 2, suffix: "%", label: "EEG model accuracy" },
  { value: 2, decimals: 0, suffix: "", label: "Published research projects" },
];

export const heroRoles = [
  "embedded systems",
  "IoT devices",
  "EEG signal pipelines",
  "applied ML models",
];

export const about = {
  paragraphs: [
    "I'm a final-year Electronics and Telecommunication student at VIT Pune. I like work that sits where hardware meets software: reading signals from sensors, making sense of them with machine learning, and turning the result into something people can use.",
    "My projects range from a six-channel EEG system that recognises shapes from brain signals to an IoT rover built for search and rescue. Both led to published research. I also build full-stack web apps and am learning Japanese on the side.",
  ],
  facts: [
    { label: "Education", value: "B.Tech ENTC, VIT Pune" },
    { label: "Location", value: "Pune, India" },
    { label: "Certifications", value: "IBM Full Stack Developer, JLPT N5" },
  ],
};

export const skills = [
  {
    group: "Languages",
    items: ["Python", "Embedded C", "Java", "HTML/CSS"],
  },
  {
    group: "AI / ML",
    items: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "OpenCV",
      "NLP",
      "Computer Vision",
    ],
  },
  {
    group: "Hardware & IoT",
    items: ["Arduino", "NodeMCU", "ESP32-CAM", "Sensors", "Wi-Fi control"],
  },
  {
    group: "Databases",
    items: ["MongoDB", "SQLite", "MySQL"],
  },
  {
    group: "Tools",
    items: ["Git/GitHub", "VS Code", "Jupyter", "Figma"],
  },
];

export const projects = [
  {
    title: "Thought to Sketch",
    year: "2025",
    summary:
      "A six-channel EEG system that recognises visual shapes from brain signals. Published research, built with a team of 4.",
    highlights: [
      "Built the TriFusion Deep Encoding Framework (TDEF)",
      "90.44% validation accuracy and 0.88 weighted F1",
      "Outperformed LSTM, Transformer and ROCKET baselines",
    ],
    tags: ["EEG", "Python", "XGBoost", "CLIP", "FFT / Wavelet", "Arduino"],
    link: "", // add a GitHub or paper link later
  },
  {
    title: "SeekBot",
    year: "2024",
    summary:
      "A remote-controlled IoT rover for disaster search and rescue. Industry-sponsored published research, built with a team of 4.",
    highlights: [
      "Real-time video streaming over Wi-Fi",
      "Gas and ultrasonic sensors for hazard and obstacle detection",
      "About 2.5 hours of battery life",
    ],
    tags: ["NodeMCU", "ESP32-CAM", "IoT", "Embedded C"],
    link: "", // add a GitHub or paper link later
  },
];

export const experience = [
  {
    role: "Director of Outreach and Social Relations",
    org: "Vishwa Conclave Committee, VIT Pune",
    period: "", // TODO: e.g. "2025 – Present"
    description:
      "Lead outreach and external relations for the committee. // TODO: add what you actually did, e.g. sponsors reached, events run",
  },
  {
    role: "Director of Outreach and Social Relations",
    org: "Social Welfare and Development Committee, VIT Pune",
    period: "", // TODO
    description:
      "Lead outreach and relationship-building for the committee. // TODO: add specifics",
  },
  {
    role: "Theatre Performer",
    org: "College theatre, including Firodiya Karandak",
    period: "", // TODO
    description:
      "Acting experience in college theatre and inter-college competitions. // TODO: add specifics",
  },
];

export const certifications = [
  {
    title: "IBM Full Stack Software Developer Professional Certificate",
    issuer: "IBM · Coursera",
  },
  {
    title: "JLPT N5",
    issuer: "Japanese Language Proficiency Test · cleared (N4 attempted)",
  },
  {
    title: "AI Workshop Certificate",
    issuer: "Be10x",
  },
];
