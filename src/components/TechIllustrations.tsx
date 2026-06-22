
// === 1. HERO ILLUSTRATION ===
export function HeroIllustration() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="animate-pulse-glow absolute top-[-120px] right-[-80px] w-[550px] h-[550px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(217,119,87,0.18) 0%, transparent 70%)" }} />
      <div className="animate-pulse-glow absolute bottom-[-100px] left-[-100px] w-[450px] h-[450px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(234,141,104,0.12) 0%, transparent 70%)", animationDelay: "2s" }} />

      <div className="animate-float-slow absolute top-[15%] right-4 md:right-[8%] opacity-20 hidden md:block">
        <NeuralNetSVG />
      </div>

      <div className="animate-float-medium absolute bottom-[20%] left-6 md:left-[6%] opacity-15 hidden md:block">
        <CoordinatesSVG />
      </div>

      {/* NEW 1 & 2 */}
      <div className="animate-float-fast absolute top-[25%] left-[10%] opacity-15 hidden lg:block" style={{ animationDelay: "1s" }}>
        <FloatingCubesSVG />
      </div>
      <div className="animate-float-slow absolute bottom-[10%] right-[30%] opacity-[0.12] hidden lg:block" style={{ animationDelay: "3s" }}>
        <SineWaveSVG />
      </div>
    </div>
  );
}

// === 2. ABOUT ILLUSTRATION ===
export function AboutIllustration() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="animate-pulse-glow absolute top-[30%] left-[-150px] w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(181,83,54,0.10) 0%, transparent 70%)", animationDelay: "1s" }} />

      <div className="animate-float-medium absolute bottom-12 left-6 md:left-[8%] opacity-[0.18] hidden lg:block">
        <TerminalBracketsSVG />
      </div>

      <div className="animate-float-slow absolute top-12 right-6 md:right-[10%] opacity-15 hidden lg:block" style={{ animationDelay: "2s" }}>
        <ServerStackSVG />
      </div>

      {/* NEW 3 */}
      <div className="animate-spin-slow absolute bottom-[15%] right-[20%] opacity-[0.12] hidden lg:block" style={{ animationDuration: "40s" }}>
        <AbstractGlobeSVG />
      </div>
    </div>
  );
}

// === 3. SKILLS ILLUSTRATION ===
export function SkillsIllustration() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="animate-pulse-glow absolute bottom-[-120px] right-[-100px] w-[450px] h-[450px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(217,119,87,0.12) 0%, transparent 70%)", animationDelay: "3s" }} />

      <div className="animate-spin-slow absolute bottom-[10%] right-6 md:right-[8%] opacity-20 hidden md:block" style={{ animationDuration: "35s" }}>
        <HexGridSVG />
      </div>

      <div className="animate-float-fast absolute top-[15%] left-6 md:left-[8%] opacity-15 hidden md:block" style={{ animationDelay: "1.5s" }}>
        <DataStructureSVG />
      </div>

      {/* NEW 4 & 5 */}
      <div className="absolute top-[10%] right-[20%] opacity-[0.12] hidden lg:block" style={{ animationDelay: "0.5s" }}>
        <BinaryRainSVG />
      </div>
      <div className="animate-float-slow absolute bottom-[20%] left-[25%] opacity-15 hidden lg:block" style={{ animationDelay: "2.5s" }}>
        <BlockChainSVG />
      </div>
    </div>
  );
}

// === 4. EXPERIENCE ILLUSTRATION ===
export function ExperienceIllustration() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="animate-float-slow absolute top-[15%] left-4 md:left-[5%] opacity-[0.16] hidden lg:block">
        <CircuitSVG />
      </div>
      <div className="animate-float-medium absolute bottom-[15%] right-4 md:right-[5%] opacity-[0.12] hidden lg:block">
        <CircuitSVGReverse />
      </div>

      {/* NEW 6 & 7 */}
      <div className="animate-float-fast absolute top-[25%] right-[15%] opacity-15 hidden lg:block" style={{ animationDelay: "1s" }}>
        <WireframeTorusSVG />
      </div>
      <div className="animate-float-slow absolute bottom-[25%] left-[15%] opacity-[0.18] hidden lg:block" style={{ animationDelay: "3s" }}>
        <MemoryChipSVG />
      </div>
    </div>
  );
}

// === 5. PROJECTS ILLUSTRATION ===
export function ProjectsIllustration() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="animate-pulse-glow absolute top-[-50px] right-[-50px] w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(234,141,104,0.12) 0%, transparent 70%)" }} />

      <div className="animate-spin-slow absolute top-[25%] right-6 md:right-[10%] opacity-[0.18] hidden md:block" style={{ animationDuration: "25s" }}>
        <RadarScanSVG />
      </div>

      <div className="animate-float-fast absolute bottom-[20%] left-6 md:left-[8%] opacity-15 hidden md:block">
        <ViewfinderSVG />
      </div>

      {/* NEW 8 */}
      <div className="animate-float-slow absolute top-[15%] left-[20%] opacity-[0.12] hidden lg:block" style={{ animationDelay: "1.5s" }}>
        <ParticleSwarmSVG />
      </div>
    </div>
  );
}

// === 6. RESEARCH ILLUSTRATION ===
export function ResearchIllustration() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="animate-pulse-glow absolute top-[20%] left-[-80px] w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(217,119,87,0.10) 0%, transparent 70%)", animationDelay: "1.5s" }} />

      <div className="animate-float-slow absolute top-[20%] left-6 md:left-[8%] opacity-20 hidden lg:block">
        <ScatterPlotSVG />
      </div>

      {/* NEW 9 */}
      <div className="animate-float-medium absolute bottom-[15%] right-[10%] opacity-20 hidden lg:block" style={{ animationDelay: "2s" }}>
        <FractalTreeSVG />
      </div>
    </div>
  );
}

// === 7. LEETCODE ILLUSTRATION ===
export function LeetCodeIllustration() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="animate-pulse-glow absolute bottom-[-100px] right-[-50px] w-[450px] h-[450px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(181,83,54,0.12) 0%, transparent 70%)" }} />

      <div className="animate-float-medium absolute top-[25%] right-6 md:right-[8%] opacity-20 hidden lg:block">
        <AlgorithmNodesSVG />
      </div>

      {/* NEW 10 */}
      <div className="animate-float-slow absolute top-[30%] left-[10%] opacity-[0.18] hidden lg:block" style={{ animationDelay: "0.5s" }}>
        <QuantumCoreSVG />
      </div>
    </div>
  );
}

// === 8. ACHIEVEMENTS ILLUSTRATION ===
export function AchievementsIllustration() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="animate-float-slow absolute top-[10%] right-6 md:right-[12%] opacity-[0.18] hidden md:block">
        <ConstellationSVG />
      </div>
    </div>
  );
}


// ==========================================
// === DETAILED DECORATIVE SVG SUBCOMPONENTS ===
// ==========================================

function NeuralNetSVG() {
  const layers = [[70, 150, 230], [30, 110, 190, 270], [70, 150, 230]];
  const xs = [20, 140, 260];
  return (
    <svg width="280" height="300" viewBox="0 0 280 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Connectors */}
      {layers[0].map(y0 => layers[1].map(y1 => (
        <line key={`${y0}-${y1}`} x1={xs[0]+12} y1={y0} x2={xs[1]-12} y2={y1}
          stroke="var(--brand-500)" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6" />
      )))}
      {layers[1].map(y0 => layers[2].map(y1 => (
        <line key={`${y0}-${y1}`} x1={xs[1]+12} y1={y0} x2={xs[2]-12} y2={y1}
          stroke="var(--brand-500)" strokeWidth="1.5" opacity="0.8" />
      )))}
      {/* Glowing connection lines */}
      <line x1={xs[0]+12} y1={150} x2={xs[1]-12} y2={110} stroke="var(--brand-600)" strokeWidth="2.5" />
      <line x1={xs[1]+12} y1={110} x2={xs[2]-12} y2={150} stroke="var(--brand-600)" strokeWidth="2.5" />

      {/* Nodes */}
      {layers.map((ys, li) => ys.map(y => (
        <g key={`${li}-${y}`}>
          <circle cx={xs[li]} cy={y} r="12" fill="var(--bg-primary)" stroke="var(--brand-500)" strokeWidth="2" />
          <circle cx={xs[li]} cy={y} r="6" fill="var(--brand-500)" />
          {/* Accent pulse rings around some nodes */}
          {(li === 1 && (y === 110 || y === 190)) && (
            <circle cx={xs[li]} cy={y} r="18" stroke="var(--brand-600)" strokeWidth="1" className="animate-ping" style={{ transformOrigin: `${xs[li]}px ${y}px`, animationDuration: "3s" }} />
          )}
        </g>
      )))}
    </svg>
  );
}

function CoordinatesSVG() {
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="20" x2="20" y2="200" stroke="var(--brand-500)" strokeWidth="1.5" />
      <line x1="20" y1="200" x2="200" y2="200" stroke="var(--brand-500)" strokeWidth="1.5" />
      <path d="M 20 200 Q 70 80 130 140 T 200 40" stroke="var(--brand-600)" strokeWidth="2.5" strokeDasharray="3 3" fill="none" />
      <circle cx="130" cy="140" r="5" fill="var(--brand-600)" />
      <text x="140" y="145" fontFamily="monospace" fontSize="11" fill="var(--text-tertiary)">loss: 0.04</text>
      <circle cx="200" cy="40" r="5" fill="var(--brand-600)" />
      <text x="170" y="30" fontFamily="monospace" fontSize="11" fill="var(--brand-700)" fontWeight="bold">mAP: 99.48%</text>
      {/* Grid lines */}
      <line x1="20" y1="80" x2="200" y2="80" stroke="var(--border-default)" strokeWidth="1" strokeDasharray="8 8" />
      <line x1="20" y1="140" x2="200" y2="140" stroke="var(--border-default)" strokeWidth="1" strokeDasharray="8 8" />
      <line x1="110" y1="20" x2="110" y2="200" stroke="var(--border-default)" strokeWidth="1" strokeDasharray="8 8" />
    </svg>
  );
}

function TerminalBracketsSVG() {
  return (
    <svg width="250" height="200" viewBox="0 0 250 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Terminal Outline */}
      <rect x="10" y="10" width="230" height="180" rx="8" stroke="var(--brand-500)" strokeWidth="2" fill="var(--surface-secondary)" />
      {/* Header bar */}
      <line x1="10" y1="40" x2="240" y2="40" stroke="var(--brand-500)" strokeWidth="1.5" />
      {/* Header dots */}
      <circle cx="30" cy="25" r="4" fill="var(--brand-600)" />
      <circle cx="45" cy="25" r="4" fill="var(--brand-400)" />
      <circle cx="60" cy="25" r="4" fill="var(--border-strong)" />
      <text x="110" y="28" fontFamily="monospace" fontSize="11" fill="var(--text-tertiary)">train.py</text>
      
      {/* Code Text lines */}
      <text x="25" y="70" fontFamily="monospace" fontSize="13" fill="var(--brand-600)" fontWeight="bold">import torch</text>
      <text x="25" y="95" fontFamily="monospace" fontSize="13" fill="var(--text-secondary)">model = YOLO("yolov8x.pt")</text>
      <text x="25" y="120" fontFamily="monospace" fontSize="13" fill="var(--text-secondary)">results = model.train(</text>
      <text x="45" y="145" fontFamily="monospace" fontSize="13" fill="var(--brand-700)">data="maternal_health.yaml",</text>
      <text x="45" y="170" fontFamily="monospace" fontSize="13" fill="var(--brand-700)">epochs=100, imgsz=640</text>
      <text x="220" y="170" fontFamily="monospace" fontSize="13" fill="var(--text-secondary)">)</text>
    </svg>
  );
}

function HexGridSVG() {
  const hexPath = (cx: number, cy: number, r: number) => {
    const pts = Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
    });
    return `M ${pts.join(' L ')} Z`;
  };
  const positions: [number, number][] = [];
  const r = 32;
  const w = r * Math.sqrt(3);
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const x = col * w + (row % 2) * (w / 2) + r;
      const y = row * (r * 1.5) + r;
      positions.push([x, y]);
    }
  }
  return (
    <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {positions.map(([x, y], i) => (
        <g key={i}>
          <path d={hexPath(x, y, 26)} stroke="var(--brand-500)" strokeWidth="1.5" fill="none" opacity={0.4 + (i % 4) * 0.15} />
          {i % 3 === 0 && (
            <circle cx={x} cy={y} r="3" fill="var(--brand-600)" />
          )}
        </g>
      ))}
    </svg>
  );
}

function CircuitSVG() {
  return (
    <svg width="200" height="350" viewBox="0 0 200 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Horizontal & vertical lines weaving */}
      <path d="M 20 10 L 20 120 L 80 180 L 80 260 L 140 320 M 80 180 L 140 180 L 140 240 L 180 280" 
        stroke="var(--brand-500)" strokeWidth="2" strokeLinecap="round" />
      <path d="M 120 10 L 120 100 L 180 160 L 180 250" 
        stroke="var(--brand-400)" strokeWidth="1.5" strokeDasharray="6 4" strokeLinecap="round" />

      {/* Nodes / Chips */}
      <rect x="68" y="248" width="24" height="24" rx="4" stroke="var(--brand-500)" strokeWidth="2" fill="var(--surface-secondary)" />
      <circle cx="80" cy="260" r="4" fill="var(--brand-600)" />

      {/* Node circles */}
      {[[20, 10], [140, 320], [180, 280], [120, 10], [180, 250]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="var(--brand-600)" stroke="var(--bg-primary)" strokeWidth="1.5" />
      ))}
    </svg>
  );
}

function CircuitSVGReverse() {
  return (
    <svg width="200" height="350" viewBox="0 0 200 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 180 10 L 180 120 L 120 180 L 120 260 L 60 320 M 120 180 L 60 180 L 60 240 L 20 280" 
        stroke="var(--brand-500)" strokeWidth="2" strokeLinecap="round" />
      
      <rect x="108" y="248" width="24" height="24" rx="4" stroke="var(--brand-500)" strokeWidth="2" fill="var(--surface-secondary)" />
      <circle cx="120" cy="260" r="4" fill="var(--brand-600)" />

      {[[180, 10], [60, 320], [20, 280]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="var(--brand-600)" stroke="var(--bg-primary)" strokeWidth="1.5" />
      ))}
    </svg>
  );
}

function RadarScanSVG() {
  return (
    <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="140" cy="140" r="120" stroke="var(--brand-500)" strokeWidth="1.5" strokeDasharray="8 6" />
      <circle cx="140" cy="140" r="80" stroke="var(--brand-500)" strokeWidth="1.2" />
      <circle cx="140" cy="140" r="45" stroke="var(--brand-400)" strokeWidth="2" strokeDasharray="16 8" />
      
      {/* Radar hand line */}
      <line x1="140" y1="140" x2="225" y2="55" stroke="var(--brand-600)" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Target markers */}
      <circle cx="210" cy="90" r="5" fill="var(--brand-600)" />
      <path d="M 205 90 L 215 90 M 210 85 L 210 95" stroke="var(--brand-600)" strokeWidth="1.5" />
      <text x="220" y="86" fontFamily="monospace" fontSize="10" fill="var(--brand-700)" fontWeight="bold">Target detected</text>

      <circle cx="90" cy="180" r="4" fill="var(--brand-500)" opacity="0.6" />
    </svg>
  );
}

function ViewfinderSVG() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bounding box viewfinder bracket markers */}
      {/* Top Left */}
      <path d="M 10 40 L 10 10 L 40 10" stroke="var(--brand-600)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Top Right */}
      <path d="M 160 10 L 190 10 L 190 40" stroke="var(--brand-600)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Bottom Left */}
      <path d="M 10 160 L 10 190 L 40 190" stroke="var(--brand-600)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Bottom Right */}
      <path d="M 160 190 L 190 190 L 190 160" stroke="var(--brand-600)" strokeWidth="3.5" strokeLinecap="round" />

      {/* Grid lines inside */}
      <rect x="25" y="25" width="150" height="150" stroke="var(--brand-500)" strokeWidth="1" strokeDasharray="4 6" />
      <circle cx="100" cy="100" r="6" fill="var(--brand-600)" />
      <text x="112" y="104" fontFamily="monospace" fontSize="11" fill="var(--brand-700)">conf: 0.99</text>
    </svg>
  );
}

function ScatterPlotSVG() {
  const points = [
    [40, 130], [70, 110], [90, 80], [120, 100], [140, 60], [165, 45], 
    [50, 85], [110, 50], [150, 115], [180, 75], [80, 150]
  ];
  return (
    <svg width="240" height="220" viewBox="0 0 240 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Grid background */}
      <line x1="20" y1="20" x2="20" y2="180" stroke="var(--brand-500)" strokeWidth="1.5" />
      <line x1="20" y1="180" x2="220" y2="180" stroke="var(--brand-500)" strokeWidth="1.5" />
      
      {/* Grid mesh */}
      <line x1="20" y1="60" x2="220" y2="60" stroke="var(--border-default)" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="20" y1="100" x2="220" y2="100" stroke="var(--border-default)" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="20" y1="140" x2="220" y2="140" stroke="var(--border-default)" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="80" y1="20" x2="80" y2="180" stroke="var(--border-default)" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="140" y1="20" x2="140" y2="180" stroke="var(--border-default)" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="200" y1="20" x2="200" y2="180" stroke="var(--border-default)" strokeWidth="0.8" strokeDasharray="4 4" />

      {/* Regression Curve */}
      <path d="M 20 160 C 80 140, 130 70, 220 30" stroke="var(--brand-600)" strokeWidth="3" strokeLinecap="round" />
      
      {/* Scatter Points */}
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 5.5 : 4} fill={i % 3 === 0 ? "var(--brand-600)" : "var(--brand-400)"} />
      ))}
      <text x="210" y="195" fontFamily="monospace" fontSize="10" fill="var(--text-tertiary)">Epoch</text>
      <text x="25" y="15" fontFamily="monospace" fontSize="10" fill="var(--text-tertiary)">mAP</text>
    </svg>
  );
}

function AlgorithmNodesSVG() {
  return (
    <svg width="260" height="200" viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tree Data Structure Representation */}
      {/* Connections */}
      <line x1="130" y1="30" x2="70" y2="80" stroke="var(--brand-500)" strokeWidth="2" />
      <line x1="130" y1="30" x2="190" y2="80" stroke="var(--brand-500)" strokeWidth="2" />
      <line x1="70" y1="80" x2="40" y2="130" stroke="var(--brand-500)" strokeWidth="1.5" />
      <line x1="70" y1="80" x2="100" y2="130" stroke="var(--brand-500)" strokeWidth="1.5" />
      <line x1="190" y1="80" x2="160" y2="130" stroke="var(--brand-500)" strokeWidth="1.5" />
      <line x1="190" y1="80" x2="220" y2="130" stroke="var(--brand-500)" strokeWidth="1.5" />

      {/* Nodes */}
      {/* Root */}
      <circle cx="130" cy="30" r="14" fill="var(--bg-primary)" stroke="var(--brand-600)" strokeWidth="2.5" />
      <text x="126" y="34" fontFamily="monospace" fontSize="11" fill="var(--brand-700)" fontWeight="bold">98</text>

      {/* Layer 1 */}
      <circle cx="70" cy="80" r="12" fill="var(--bg-primary)" stroke="var(--brand-500)" strokeWidth="2" />
      <text x="66" y="84" fontFamily="monospace" fontSize="10" fill="var(--brand-600)">62</text>
      <circle cx="190" cy="80" r="12" fill="var(--bg-primary)" stroke="var(--brand-500)" strokeWidth="2" />
      <text x="186" y="84" fontFamily="monospace" fontSize="10" fill="var(--brand-600)">35</text>

      {/* Layer 2 */}
      {[[40, "E"], [100, "M"], [160, "H"], [220, "D"]].map(([x, char], i) => (
        <g key={i}>
          <circle cx={Number(x)} cy="130" r="10" fill="var(--surface-secondary)" stroke="var(--brand-400)" strokeWidth="1.5" />
          <text x={Number(x) - 4} y="134" fontFamily="monospace" fontSize="9" fill="var(--text-secondary)" fontWeight="bold">{char}</text>
        </g>
      ))}

      {/* Braces code accent overlay */}
      <text x="10" y="175" fontFamily="monospace" fontSize="12" fill="var(--brand-700)">{`solve(easy, med, hard)`}</text>
      <text x="10" y="195" fontFamily="monospace" fontSize="12" fill="var(--text-tertiary)">{`// active_days = 87`}</text>
    </svg>
  );
}

function ConstellationSVG() {
  const points = [
    [50, 40], [130, 20], [210, 45], [90, 80], [170, 95], [40, 140], 
    [120, 130], [200, 150], [150, 190], [80, 200]
  ];
  return (
    <svg width="250" height="230" viewBox="0 0 250 230" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Network of connections (Constellation style) */}
      <line x1="50" y1="40" x2="130" y2="20" stroke="var(--brand-500)" strokeWidth="1" opacity="0.6" />
      <line x1="130" y1="20" x2="210" y2="45" stroke="var(--brand-500)" strokeWidth="1" opacity="0.6" />
      <line x1="130" y1="20" x2="90" y2="80" stroke="var(--brand-500)" strokeWidth="1.5" />
      <line x1="90" y1="80" x2="170" y2="95" stroke="var(--brand-500)" strokeWidth="1.5" />
      <line x1="170" y1="95" x2="210" y2="45" stroke="var(--brand-500)" strokeWidth="1" opacity="0.6" />
      <line x1="90" y1="80" x2="40" y2="140" stroke="var(--brand-500)" strokeWidth="1.2" />
      <line x1="90" y1="80" x2="120" y2="130" stroke="var(--brand-500)" strokeWidth="1.2" />
      <line x1="170" y1="95" x2="120" y2="130" stroke="var(--brand-500)" strokeWidth="1.2" />
      <line x1="170" y1="95" x2="200" y2="150" stroke="var(--brand-500)" strokeWidth="1.2" />
      <line x1="120" y1="130" x2="150" y2="190" stroke="var(--brand-500)" strokeWidth="1.5" />
      <line x1="120" y1="130" x2="80" y2="200" stroke="var(--brand-500)" strokeWidth="1.5" />
      <line x1="80" y1="200" x2="150" y2="190" stroke="var(--brand-500)" strokeWidth="1" opacity="0.6" />

      {/* Nodes / Stars */}
      {points.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i === 1 || i === 3 || i === 6 ? 6 : 4} fill="var(--bg-primary)" stroke="var(--brand-500)" strokeWidth="1.5" />
          <circle cx={x} cy={y} r={i === 1 || i === 3 || i === 6 ? 3 : 2} fill="var(--brand-600)" />
          {/* Accent pulses */}
          {(i === 1 || i === 6) && (
            <circle cx={x} cy={y} r="12" stroke="var(--brand-400)" strokeWidth="0.8" className="animate-ping" style={{ transformOrigin: `${x}px ${y}px`, animationDuration: "4s" }} />
          )}
        </g>
      ))}
    </svg>
  );
}

// === 9. GITHUB ILLUSTRATION ===
export function GitHubIllustration() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Background glow */}
      <div className="animate-pulse-glow absolute top-[-50px] left-[-80px] w-[450px] h-[450px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(217,119,87,0.12) 0%, transparent 70%)", animationDelay: "1s" }} />

      {/* GitHub Graph Representation */}
      <div className="animate-float-medium absolute top-[25%] left-6 md:left-[8%] opacity-20 hidden lg:block">
        <GitHubNodesSVG />
      </div>

      {/* Merge Pull Request Abstract */}
      <div className="animate-float-slow absolute bottom-[10%] right-6 md:right-[10%] opacity-15 hidden lg:block" style={{ animationDelay: "2.5s" }}>
        <MergePRSVG />
      </div>
    </div>
  );
}

function GitHubNodesSVG() {
  return (
    <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Commit tree / Branching graph */}
      {/* Main branch (trunk) */}
      <line x1="120" y1="30" x2="120" y2="210" stroke="var(--brand-500)" strokeWidth="3" strokeLinecap="round" />
      
      {/* Feature branch left */}
      <path d="M 120 70 C 80 90, 80 130, 120 150" stroke="var(--brand-500)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      
      {/* Feature branch right */}
      <path d="M 120 110 C 160 130, 160 170, 120 190" stroke="var(--brand-500)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      
      {/* Commits (Nodes) */}
      {/* Main trunk commits */}
      {[30, 70, 110, 150, 190, 210].map((y, i) => (
        <g key={`main-${i}`}>
          <circle cx="120" cy={y} r="6" fill="var(--bg-primary)" stroke="var(--brand-600)" strokeWidth="2" />
        </g>
      ))}

      {/* Feature branch left commits */}
      <circle cx="90" cy="110" r="5" fill="var(--bg-primary)" stroke="var(--brand-600)" strokeWidth="2" />
      <circle cx="83" cy="90" r="3" fill="var(--brand-600)" />
      
      {/* Feature branch right commits */}
      <circle cx="150" cy="150" r="5" fill="var(--bg-primary)" stroke="var(--brand-600)" strokeWidth="2" />
      <circle cx="157" cy="130" r="3" fill="var(--brand-600)" />
      <circle cx="157" cy="170" r="3" fill="var(--brand-600)" />
      
      {/* Accent pulse rings */}
      <circle cx="120" cy="30" r="12" stroke="var(--brand-400)" strokeWidth="1" className="animate-ping" style={{ transformOrigin: `120px 30px`, animationDuration: "3s" }} />

      {/* Decoration text */}
      <text x="135" y="34" fontFamily="monospace" fontSize="10" fill="var(--text-tertiary)" fontWeight="bold">main</text>
      <text x="165" y="154" fontFamily="monospace" fontSize="9" fill="var(--brand-700)">feat/stats</text>
    </svg>
  );
}

function ServerStackSVG() {
  return (
    <svg width="200" height="250" viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Server Rack Background */}
      <rect x="20" y="20" width="160" height="210" rx="6" stroke="var(--brand-500)" strokeWidth="2" fill="var(--surface-secondary)" />
      
      {/* Server Blades */}
      {[40, 90, 140, 190].map((y, i) => (
        <g key={i}>
          <rect x="30" y={y} width="140" height="30" rx="4" stroke="var(--brand-500)" strokeWidth="1.5" fill="var(--surface-primary)" />
          {/* Status Lights */}
          <circle cx="150" cy={y + 15} r="3" fill="var(--brand-600)" />
          {i === 1 ? (
             <circle cx="135" cy={y + 15} r="3" fill="var(--brand-400)" className="animate-ping" style={{ transformOrigin: `135px ${y + 15}px`, animationDuration: "2s" }} />
          ) : (
            <circle cx="135" cy={y + 15} r="3" fill="var(--brand-400)" />
          )}
          {/* Vents */}
          <line x1="45" y1={y + 10} x2="70" y2={y + 10} stroke="var(--brand-500)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="45" y1={y + 15} x2="70" y2={y + 15} stroke="var(--brand-500)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="45" y1={y + 20} x2="70" y2={y + 20} stroke="var(--brand-500)" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      ))}

      {/* Wires */}
      <path d="M 170 55 C 190 55, 190 105, 170 105" stroke="var(--brand-600)" strokeWidth="2" fill="none" />
      <path d="M 170 155 C 190 155, 190 205, 170 205" stroke="var(--brand-500)" strokeWidth="2" fill="none" opacity="0.6" />
    </svg>
  );
}

function DataStructureSVG() {
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cylinders representing databases */}
      <ellipse cx="110" cy="50" rx="40" ry="15" stroke="var(--brand-500)" strokeWidth="2" fill="var(--surface-secondary)" />
      <path d="M 70 50 L 70 130 A 40 15 0 0 0 150 130 L 150 50" stroke="var(--brand-500)" strokeWidth="2" fill="var(--surface-secondary)" />
      <ellipse cx="110" cy="90" rx="40" ry="15" stroke="var(--brand-500)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
      
      {/* Floating data blocks entering/leaving */}
      <rect x="20" y="80" width="30" height="30" rx="4" stroke="var(--brand-600)" strokeWidth="1.5" fill="var(--surface-primary)" />
      <line x1="50" y1="95" x2="65" y2="95" stroke="var(--brand-600)" strokeWidth="1.5" strokeDasharray="2 2" />
      
      <rect x="170" y="120" width="30" height="30" rx="4" stroke="var(--brand-600)" strokeWidth="1.5" fill="var(--surface-primary)" />
      <line x1="155" y1="135" x2="170" y2="135" stroke="var(--brand-600)" strokeWidth="1.5" strokeDasharray="2 2" />

      {/* Abstract Query Overlay */}
      <text x="80" y="170" fontFamily="monospace" fontSize="12" fill="var(--brand-700)">SELECT *</text>
      <text x="80" y="190" fontFamily="monospace" fontSize="12" fill="var(--text-tertiary)">FROM data</text>
    </svg>
  );
}

function MergePRSVG() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Base Line */}
      <line x1="40" y1="150" x2="160" y2="150" stroke="var(--brand-500)" strokeWidth="3" strokeLinecap="round" />
      
      {/* Pull Request Arrow (Merge) */}
      <path d="M 100 50 L 100 130" stroke="var(--brand-600)" strokeWidth="3" strokeLinecap="round" />
      <path d="M 85 115 L 100 140 L 115 115" stroke="var(--brand-600)" strokeWidth="3" strokeLinecap="round" fill="none" />
      
      {/* Branching from below */}
      <path d="M 60 150 C 60 100, 100 100, 100 50" stroke="var(--brand-500)" strokeWidth="2" strokeDasharray="6 6" fill="none" />

      {/* Commits */}
      <circle cx="60" cy="150" r="5" fill="var(--bg-primary)" stroke="var(--brand-500)" strokeWidth="2" />
      <circle cx="160" cy="150" r="5" fill="var(--bg-primary)" stroke="var(--brand-500)" strokeWidth="2" />
      <circle cx="100" cy="50" r="7" fill="var(--bg-primary)" stroke="var(--brand-600)" strokeWidth="2.5" />
      <circle cx="100" cy="50" r="3" fill="var(--brand-600)" />
      
      <circle cx="100" cy="50" r="14" stroke="var(--brand-400)" strokeWidth="1" className="animate-ping" style={{ transformOrigin: `100px 50px`, animationDuration: "2.5s" }} />
      
      <text x="115" y="54" fontFamily="monospace" fontSize="11" fill="var(--brand-700)" fontWeight="bold">Merged</text>
    </svg>
  );
}

function FloatingCubesSVG() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[
        { dx: 100, dy: 60, s: 1, op: 0.8 },
        { dx: 60, dy: 110, s: 0.7, op: 0.4 },
        { dx: 130, dy: 130, s: 0.5, op: 0.6 }
      ].map((c, i) => (
        <g key={i} transform={`translate(${c.dx}, ${c.dy}) scale(${c.s})`}>
          <path d="M 0 -20 L 34.6 -40 L 69.2 -20 L 34.6 0 Z" fill="var(--brand-500)" opacity={c.op * 0.5} />
          <path d="M 0 -20 L 0 20 L 34.6 40 L 34.6 0 Z" fill="var(--brand-600)" opacity={c.op * 0.8} />
          <path d="M 69.2 -20 L 69.2 20 L 34.6 40 L 34.6 0 Z" fill="var(--brand-400)" opacity={c.op} />
          <path d="M 0 -20 L 34.6 -40 L 69.2 -20 L 69.2 20 L 34.6 40 L 0 20 Z" stroke="var(--brand-500)" strokeWidth="1" fill="none" />
          <path d="M 0 -20 L 34.6 0 L 69.2 -20 M 34.6 0 L 34.6 40" stroke="var(--brand-500)" strokeWidth="1" fill="none" />
        </g>
      ))}
    </svg>
  );
}

function SineWaveSVG() {
  return (
    <svg width="250" height="150" viewBox="0 0 250 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0 75 Q 31 10, 62 75 T 125 75 T 187 75 T 250 75" stroke="var(--brand-500)" strokeWidth="2" fill="none" opacity="0.8" />
      <path d="M 0 75 Q 31 140, 62 75 T 125 75 T 187 75 T 250 75" stroke="var(--brand-400)" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M 0 75 Q 40 40, 83 75 T 166 75 T 250 75" stroke="var(--brand-600)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.6" />
      <circle cx="62" cy="75" r="3" fill="var(--brand-600)" />
      <circle cx="125" cy="75" r="4" fill="var(--brand-500)" className="animate-ping" style={{ transformOrigin: `125px 75px`, animationDuration: "3s" }} />
      <circle cx="125" cy="75" r="3" fill="var(--brand-500)" />
      <circle cx="187" cy="75" r="3" fill="var(--brand-600)" />
    </svg>
  );
}

function AbstractGlobeSVG() {
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="110" cy="110" r="100" stroke="var(--brand-500)" strokeWidth="1.5" strokeDasharray="8 4" fill="none" opacity="0.5" />
      <circle cx="110" cy="110" r="100" stroke="var(--brand-600)" strokeWidth="0.5" fill="none" opacity="0.3" />
      <ellipse cx="110" cy="110" rx="100" ry="40" stroke="var(--brand-500)" strokeWidth="1" fill="none" opacity="0.6" />
      <ellipse cx="110" cy="110" rx="40" ry="100" stroke="var(--brand-500)" strokeWidth="1" fill="none" opacity="0.6" />
      <ellipse cx="110" cy="110" rx="100" ry="15" stroke="var(--brand-400)" strokeWidth="1" fill="none" opacity="0.4" />
      <ellipse cx="110" cy="110" rx="15" ry="100" stroke="var(--brand-400)" strokeWidth="1" fill="none" opacity="0.4" />
      <circle cx="110" cy="110" r="4" fill="var(--brand-600)" />
      {/* Nodes on globe */}
      {[ [185, 83], [35, 137], [130, 18], [90, 202], [70, 70], [150, 150] ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="var(--brand-500)" />
      ))}
    </svg>
  );
}

function BinaryRainSVG() {
  return (
    <svg width="150" height="200" viewBox="0 0 150 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[20, 50, 80, 110, 140].map((x, col) => (
        <g key={col} opacity={0.3 + (col % 3) * 0.2}>
          {[20, 50, 80, 110, 140, 170].map((y, row) => (
            <text key={row} x={x} y={y} fontFamily="monospace" fontSize="14" fill="var(--brand-600)" fontWeight="bold" opacity={1 - (row * 0.15)}>
              {Math.random() > 0.5 ? "1" : "0"}
            </text>
          ))}
        </g>
      ))}
    </svg>
  );
}

function BlockChainSVG() {
  return (
    <svg width="260" height="120" viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="60" x2="220" y2="60" stroke="var(--brand-500)" strokeWidth="2" strokeDasharray="4 4" />
      {[40, 130, 220].map((cx, i) => (
        <g key={i} transform={`translate(${cx}, 60) rotate(45)`}>
          <rect x="-20" y="-20" width="40" height="40" rx="4" fill="var(--surface-primary)" stroke="var(--brand-600)" strokeWidth="2" />
          <rect x="-10" y="-10" width="20" height="20" rx="2" fill="var(--brand-500)" opacity="0.3" />
        </g>
      ))}
    </svg>
  );
}

function WireframeTorusSVG() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(100, 100)">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          return (
            <ellipse
              key={i}
              cx={40 * Math.cos(angle)}
              cy={40 * Math.sin(angle)}
              rx="30"
              ry="15"
              transform={`rotate(${i * 30})`}
              stroke="var(--brand-500)"
              strokeWidth="1"
              fill="none"
              opacity="0.5"
            />
          );
        })}
        <circle cx="0" cy="0" r="70" stroke="var(--brand-600)" strokeWidth="1.5" strokeDasharray="6 6" fill="none" opacity="0.4" />
        <circle cx="0" cy="0" r="10" stroke="var(--brand-500)" strokeWidth="1" fill="none" opacity="0.8" />
      </g>
    </svg>
  );
}

function MemoryChipSVG() {
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer pins */}
      <g stroke="var(--brand-500)" strokeWidth="2" strokeLinecap="round">
        {Array.from({ length: 7 }).map((_, i) => (
          <g key={i}>
            {/* Top */}
            <line x1={50 + i * 20} y1="30" x2={50 + i * 20} y2="60" />
            {/* Bottom */}
            <line x1={50 + i * 20} y1="160" x2={50 + i * 20} y2="190" />
            {/* Left */}
            <line x1="30" y1={50 + i * 20} x2="60" y2={50 + i * 20} />
            {/* Right */}
            <line x1="160" y1={50 + i * 20} x2="190" y2={50 + i * 20} />
          </g>
        ))}
      </g>
      {/* Chip body */}
      <rect x="60" y="60" width="100" height="100" rx="8" fill="var(--surface-secondary)" stroke="var(--brand-600)" strokeWidth="2" />
      <rect x="75" y="75" width="70" height="70" rx="4" fill="none" stroke="var(--brand-500)" strokeWidth="1" opacity="0.5" />
      <circle cx="110" cy="110" r="15" fill="var(--brand-600)" opacity="0.8" />
      <circle cx="110" cy="110" r="25" fill="none" stroke="var(--brand-500)" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="70" cy="70" r="3" fill="var(--brand-400)" />
    </svg>
  );
}

function ParticleSwarmSVG() {
  const pts = [
    [50, 50], [90, 30], [150, 60], [180, 110], [140, 160], [80, 180], [40, 130], [100, 100]
  ];
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={`M ${pts[0].join(',')} L ${pts[1].join(',')} L ${pts[2].join(',')} L ${pts[3].join(',')} L ${pts[4].join(',')} L ${pts[5].join(',')} L ${pts[6].join(',')} Z`} stroke="var(--brand-500)" strokeWidth="1" fill="none" opacity="0.4" />
      <path d={`M ${pts[0].join(',')} L ${pts[7].join(',')} L ${pts[3].join(',')}`} stroke="var(--brand-500)" strokeWidth="1" fill="none" opacity="0.4" />
      <path d={`M ${pts[6].join(',')} L ${pts[7].join(',')} L ${pts[4].join(',')}`} stroke="var(--brand-500)" strokeWidth="1" fill="none" opacity="0.4" />
      <path d={`M ${pts[1].join(',')} L ${pts[7].join(',')} L ${pts[5].join(',')}`} stroke="var(--brand-500)" strokeWidth="1" fill="none" opacity="0.4" />
      
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 7 ? 6 : 3} fill="var(--brand-600)" />
      ))}
      <circle cx={pts[7][0]} cy={pts[7][1]} r="14" stroke="var(--brand-400)" strokeWidth="1" className="animate-ping" style={{ transformOrigin: `${pts[7][0]}px ${pts[7][1]}px`, animationDuration: "4s" }} />
    </svg>
  );
}

function FractalTreeSVG() {
  return (
    <svg width="200" height="220" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="var(--brand-500)" strokeLinecap="round">
        {/* Trunk */}
        <line x1="100" y1="200" x2="100" y2="140" strokeWidth="3" />
        {/* Level 1 */}
        <line x1="100" y1="140" x2="60" y2="90" strokeWidth="2.5" />
        <line x1="100" y1="140" x2="140" y2="90" strokeWidth="2.5" />
        {/* Level 2 Left */}
        <line x1="60" y1="90" x2="30" y2="50" strokeWidth="2" opacity="0.8" />
        <line x1="60" y1="90" x2="80" y2="45" strokeWidth="2" opacity="0.8" />
        {/* Level 2 Right */}
        <line x1="140" y1="90" x2="120" y2="45" strokeWidth="2" opacity="0.8" />
        <line x1="140" y1="90" x2="170" y2="50" strokeWidth="2" opacity="0.8" />
        {/* Level 3 */}
        <line x1="30" y1="50" x2="15" y2="20" strokeWidth="1.5" opacity="0.5" />
        <line x1="30" y1="50" x2="40" y2="15" strokeWidth="1.5" opacity="0.5" />
        <line x1="80" y1="45" x2="70" y2="15" strokeWidth="1.5" opacity="0.5" />
        <line x1="80" y1="45" x2="95" y2="15" strokeWidth="1.5" opacity="0.5" />
        <line x1="120" y1="45" x2="105" y2="15" strokeWidth="1.5" opacity="0.5" />
        <line x1="120" y1="45" x2="130" y2="15" strokeWidth="1.5" opacity="0.5" />
        <line x1="170" y1="50" x2="160" y2="15" strokeWidth="1.5" opacity="0.5" />
        <line x1="170" y1="50" x2="185" y2="20" strokeWidth="1.5" opacity="0.5" />
      </g>
      {/* Node highlights */}
      {[ [100, 140], [60, 90], [140, 90] ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="var(--bg-primary)" stroke="var(--brand-600)" strokeWidth="2" />
      ))}
    </svg>
  );
}

function QuantumCoreSVG() {
  return (
    <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Orbit paths */}
      <ellipse cx="120" cy="120" rx="100" ry="30" transform="rotate(30 120 120)" stroke="var(--brand-500)" strokeWidth="1.5" fill="none" opacity="0.5" />
      <ellipse cx="120" cy="120" rx="100" ry="30" transform="rotate(-30 120 120)" stroke="var(--brand-500)" strokeWidth="1.5" fill="none" opacity="0.5" />
      <ellipse cx="120" cy="120" rx="100" ry="30" transform="rotate(90 120 120)" stroke="var(--brand-500)" strokeWidth="1.5" fill="none" opacity="0.5" />
      
      {/* Electrons */}
      <circle cx="34" cy="70" r="4" fill="var(--brand-600)" />
      <circle cx="206" cy="170" r="4" fill="var(--brand-600)" />
      <circle cx="120" cy="20" r="4" fill="var(--brand-600)" />
      
      {/* Nucleus */}
      <circle cx="120" cy="120" r="16" fill="var(--surface-secondary)" stroke="var(--brand-600)" strokeWidth="2" />
      <circle cx="114" cy="114" r="4" fill="var(--brand-500)" />
      <circle cx="126" cy="116" r="4" fill="var(--brand-500)" />
      <circle cx="120" cy="126" r="4" fill="var(--brand-500)" />
      
      <circle cx="120" cy="120" r="24" stroke="var(--brand-400)" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow" style={{ transformOrigin: `120px 120px`, animationDuration: "10s" }} />
    </svg>
  );
}
