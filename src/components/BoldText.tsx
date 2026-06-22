import React from "react";

// All keywords to bold across the site — ordered longer-first to avoid partial matches
const KEYWORDS = [
  // Metrics & numbers
  "99.48% mAP@50", "100% mAP@50", "99.7% accuracy", "99.4%", "9.38/10.0", "CGPA 9.38", "mAP@50",
  "< 3 seconds", "< 3s", "50 tokens/sec", "5x faster", "99.7%", "9 languages",
  "top 14 of 550+", "top 30 of 760+", "1,312 annotated images", "5 real-time streams",
  "5 live data streams", "5 data streams",

  // Flagship tech
  "YOLOv8", "Faster R-CNN", "MobileNetV2", "LLaMA-3.3-70b", "Claude 3.5", "Groq LLM", "Groq",
  "OpenRouter", "Firebase Firestore", "Gmail SMTP",

  // ML & AI terms
  "mAP@50", "mAP", "computer vision", "Computer Vision", "deep learning", "Deep Learning",
  "machine learning", "Machine Learning", "NLP", "text-to-speech", "speech-to-text",
  "k-fold cross-validation", "Random Forest", "LSTM", "Autoencoder",
  "adaptive model switching", "multi-frame confidence voting",
  "semantic candidate ranking", "real-time", "Real-time", "Real-Time",
  "SAFE / WARNING / EMERGENCY", "SAFE/WARNING/EMERGENCY",

  // Frameworks & tools
  "React", "Flask", "FastAPI", "Firebase", "Docker", "Node.js", "Express.js",
  "Tailwind CSS", "TensorFlow", "Scikit-Learn", "OpenCV", "Pandas", "NumPy",
  "SQLite", "MongoDB", "MySQL", "JWT", "SMTP", "OCR",

  // Languages
  "Python", "JavaScript", "TypeScript",

  // IEEE & research
  "IEEE Xplore", "IEEE ICITSIF 2026", "Mi-IRICT 2025", "IEEE",
  "CICDDoS2019", "DDoS", "ASHA",

  // Role / institution keywords
  "Merit Scholarship", "RV University", "IEEE RVU Communications Society",
  "IEEE Bangalore Section", "IIT Roorkee", "MAHSA University",
  "B.Tech (Hons.)", "AI & Machine Learning",

  // Impact words
  "assistive", "visually impaired", "rural India", "rural talent",
  "one-tap", "emergency", "Emergency", "SOS",
];

// Build a single regex from the keyword list (escape special chars)
const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const KEYWORD_REGEX = new RegExp(
  `(${KEYWORDS.map(escapeRegex).join("|")})`,
  "g"
);

interface BoldTextProps {
  text: string;
  className?: string;
}

export function BoldText({ text, className }: BoldTextProps) {
  const parts = text.split(KEYWORD_REGEX);

  return (
    <span className={className}>
      {parts.map((part, i) =>
        KEYWORDS.includes(part) ? (
          <strong key={i} style={{ fontWeight: 600, color: "inherit" }}>
            {part}
          </strong>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </span>
  );
}
