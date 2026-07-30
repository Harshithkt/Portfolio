export const portfolioData = {
  hero: {
    name: "Harshith KT",
    title: "AI & ML Engineer & MERN Stack Developer · B.Tech (Hons.) CSE, RV University, Bengaluru",
    subtext: "Building assistive AI systems and publishing research at IEEE venues.",
    contact: {
      email: "harshithkt06@gmail.com",
      linkedin: "https://linkedin.com/in/harshith-kt",
      github: "https://github.com/Harshithkt",
    }
  },
  about: {
    bio: [
      "B.Tech (Hons.) in Computer Science Engineering at RV University, Bengaluru (Sep 2024 – Sep 2028), majoring in AI & Machine Learning, minoring in Digital Experience Design (UI/UX).",
      "CGPA 9.27/10.0; Merit Scholarship recipient, ranked top 14 of 550+ students.",
      "Chair of the IEEE RVU Communications Society, leading technical workshops, hackathons, and student engagement.",
      "Currently a Research & Development Intern with the IEEE Bangalore Section."
    ]
  },
  skills: [
    {
      category: "Languages",
      items: ["Python", "Java", "C", "JavaScript"]
    },
    {
      category: "Web Development",
      items: ["React.js", "Node.js", "Express.js", "FastAPI", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "MySQL", "SQLite"]
    },
    {
      category: "ML & AI",
      items: ["Scikit-Learn", "TensorFlow", "Pandas", "NumPy", "OpenCV", "NLP", "Deep Learning", "Computer Vision"]
    },
    {
      category: "Developer Tools",
      items: ["Git", "GitHub", "Docker", "GitHub Actions", "Postman", "VS Code"]
    }
  ],
  experience: [
    {
      role: "Research & Development Intern",
      company: "IEEE Bangalore Section, Bengaluru",
      date: "Jan 2025 – Present",
      bullets: [
        "Researching the robustness of YOLOv8 and Faster R-CNN for assistive currency recognition under real-world visual degradations.",
        "Conducted literature review on object detection, robustness benchmarking, model calibration, and currency recognition systems.",
        "Designed a corruption benchmarking framework and safety-focused evaluation metrics, including Deployment Readiness Score (DRS).",
        "Built training and evaluation pipelines using TensorFlow, Detectron2, YOLOv8, and Weights & Biases."
      ]
    },
    {
      role: "AI & Data Analytics Intern",
      company: "Shell, Remote",
      date: "Aug 2025 – Sep 2025",
      bullets: [
        "Applied machine learning and data analytics techniques to sustainability-focused datasets.",
        "Performed data preprocessing, model development, and insight generation using Python."
      ]
    }
  ],
  projects: [
    {
      title: "PharmacoRAG — Multi-Agent Pharmacovigilance Intelligence System",
      year: "2026",
      tech: ["Node.js", "React", "Vite", "ChromaDB", "Groq", "Xenova", "Transformers.js"],
      bullets: [
        "Built for AgentCon 2026: A production-grade multi-agent RAG system that transforms fragmented adverse drug event data from 4 regulatory sources into actionable, regulatory-grade intelligence.",
        "Deployed 6 specialized AI agents (Orchestrator, Query Understanding, Retrieval, Synthesis, Citation, Triage) orchestrated sequentially with graceful error handling and cross-agent context passing.",
        "Achieved zero-cost embedding infrastructure using Xenova/all-MiniLM-L6-v2 running locally; integrated Groq free-tier LLM (70B model) for reasoning without external API costs for embeddings or data privacy concerns."
      ],
      metrics: [
        { label: "AI Agents", value: "6" },
        { label: "Data Sources Ingested", value: "4" },
        { label: "ChromaDB Collections", value: "4" },
        { label: "LLM Context Window", value: "70B" },
        { label: "Retrieval Sources (Parallel)", value: "FDA + CDSCO + WHO + Labels" },
        { label: "Safety-Critical Escalations", value: "Real-time" },
        { label: "Frontend Components", value: "5+" }
      ],
      featured: true,
      github: "https://github.com/Harshithkt/Phrmaco_Rag" // Add repository URL when available
    },
    {
      title: "AssetFlow — Enterprise Asset & Resource Management ERP",
      year: "2026",
      tech: ["React", "Vite", "TailwindCSS", "Node.js", "Express", "MySQL", "JWT", "SMTP"],
      bullets: [
        "Full-stack ERP platform built in 8 hours, consolidating hardware inventory and shared resource management into a unified database, eliminating fragmented spreadsheets and manual logs.",
        "Implemented role-based access control (RBAC) across 4 roles with dynamic, context-aware dashboards tailored to each user scope; supports 5-stage asset lifecycle with soft-delete audit preservation.",
        "Built enterprise-grade security with double-allocation checks, two-person sign-off constraints for $1,000+ assets, concurrent session monitoring, and full transaction-level audit trails."
      ],
      metrics: [
        { label: "Build Time", value: "8 hours" },
        { label: "Roles Implemented", value: "4" },
        { label: "Asset Lifecycle Stages", value: "5" },
        { label: "High-Value Threshold", value: "$1,000+" },
        { label: "Dashboard Visualizations", value: "3+" },
        { label: "API Endpoints", value: "15+" }
      ],
      featured: true,
      github: "https://github.com/Harshithkt/odoo-hackathon" // Add repository URL when available
    },
    {
      title: "Vision-Aid — AI-Powered Currency Detection System",
      year: "2026",
      tech: ["YOLOv8", "Faster R-CNN", "MobileNetV2", "Python"],
      bullets: [
        "An assistive system that helps visually impaired users identify Indian currency notes and flag likely counterfeits in real time.",
        "Reached 99.48% mAP@50 with YOLOv8 and 100% mAP@50 with Faster R-CNN across 1,312 annotated images.",
        "Combines adaptive model switching, OCR, text-to-speech feedback, and multi-frame confidence voting for reliable results."
      ],
      metrics: [
        { label: "YOLOv8 mAP@50", value: "99.48%" },
        { label: "Faster R-CNN mAP@50", value: "100%" }
      ],
      featured: true,
      github: "https://github.com/Harshithkt/internship" // Intentionally empty, can be added later
    },
    {
      title: "NeuroMatch AI",
      year: "2025",
      tech: ["Flask", "NLP", "SQLite", "Docker"],
      bullets: [
        "An AI-powered resume screening and internship matching platform with semantic candidate ranking.",
        "Scores candidates using NLP analysis of skills, education, and experience.",
        "Generates interview questions and ranks candidates, with a Docker-based deployment pipeline."
      ],
      featured: false,
      github: "https://github.com/Harshithkt" // Placeholder
    },
    {
      title: "InterMarg — AI Career Assistant",
      year: "2025",
      tech: ["React", "FastAPI", "SQLite", "LLM Integration"],
      bullets: [
        "An AI career guidance platform built for rural talent, with multilingual voice interaction.",
        "Combines speech-to-text, a chatbot assistant, personalized job matching, and JWT authentication.",
        "Responsive interface built with React and Tailwind CSS."
      ],
      featured: false,
      github: "https://github.com/Harshithkt" // Placeholder
    },
    {
      title: "MamaAI — Maternal Health Platform",
      year: "2026",
      tech: ["React", "Flask", "Firebase", "Groq LLM", "Python", "Gmail SMTP"],
      bullets: [
        "Voice-first maternal health platform for rural India — pregnant women speak symptoms in Hindi, Tamil, Telugu, or 6 other languages; Groq LLM (50 tokens/sec) analyzes them and responds via text-to-speech in the same language.",
        "Real-time floating AI chatbot aggregates 5 live data streams (meals, symptoms, eyelid scans, kick counts, reports) from Firestore and classifies health status as SAFE / WARNING / EMERGENCY.",
        "One-tap SOS system dispatches email alerts to all registered ASHA workers (< 3 seconds) with the mother's location and symptoms, and logs each emergency to Firestore for audit."
      ],
      metrics: [
        { label: "Languages supported", value: "9" },
        { label: "SOS to email", value: "< 3s" }
      ],
      featured: true,
      github: "https://github.com/Harshithkt/mama_ai"
    },
    {
      title: "Smart Complaint Management System",
      year: "2024",
      tech: ["Java", "OOP", "File I/O", "Collections Framework"],
      bullets: [
        "A console-based complaint management system built entirely in Java, applying core OOP principles — encapsulation, inheritance, polymorphism, and abstraction — across role-based entities (Admin, Staff, Customer).",
        "Supports end-to-end complaint lifecycle: filing complaints, assigning to staff, tracking status (Open / In Progress / Resolved), and generating reports — all persisted via Java File I/O.",
        "Built clean class hierarchies using Java Collections (ArrayList, HashMap) to manage users and complaints, demonstrating solid data structure and object-oriented design fundamentals."
      ],
      featured: false,
      github: "https://github.com/Harshithkt/smart-complaint-management-system"
    }
  ],
  research: [
    {
      venue: "IEEE ICITSIF 2026",
      role: "Research Paper Presenter",
      badges: ["IEEE Xplore Publication"],
      description: "Presented \"Enhanced DDoS Attack Detection Leveraging Sequential and Anomaly Learning Models,\" a hybrid Random Forest + LSTM + Autoencoder approach reaching 99.7% accuracy on the CICDDoS2019 dataset."
    },
    {
      venue: "Mi-IRICT 2025",
      role: "Research Paper Presenter",
      badges: ["MAHSA University, Malaysia"],
      description: "Presented research on ovarian cancer cell classification using MobileNetV2 with k-fold cross-validation."
    }
  ],
  achievements: [
    {
      title: "Buildathon Organised By RVCE",
      date: "20th June 2026",
      description: "Secured 1st place among 31 teams in a buildathon organised by RVCE",
      featured: true
    },
    {
      title: "National Finalist, IDEASTORM E-Summit'26",
      date: "",
      description: "IIT Roorkee — top 30 of 760+ teams."
    },
    {
      title: "Chair, IEEE RVU Communications Society",
      date: "2025 – Present",
      description: "Leading technical initiatives, workshops, hackathons, and student engagement."
    },
    {
      title: "Co-Event Lead, VIKASYA'25 National Hackathon",
      date: "Apr 2025",
      description: "Co-led planning and execution of a national-level AI/ML hackathon across multiple institutions at RV University."
    },
    {
      title: "Top 10 Team",
      date: "",
      description: "Smart India Hackathon Internal Selection."
    },
    {
      title: "2nd Place",
      date: "2025",
      description: "Tenacity Hackathon."
    },
    {
      title: "7th Place",
      date: "2024",
      description: "First Ideathon (69 participating teams)."
    }
  ]
};
