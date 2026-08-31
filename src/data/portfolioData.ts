export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  status: 'LIVE' | 'CLEARED' | 'BUILDING' | 'RESEARCH' | 'CONCEPT';
  year: string;
  description: string;
  image: string;
  techStack: string[];
  link?: string;
  isFeatured?: boolean;
}

export interface Experiment {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string;
  status: 'BUILDING' | 'RESEARCH' | 'CONCEPT' | 'PREPARING';
  codeSnippet?: string;
  link?: string;
}

export interface Milestone {
  year: string;
  title: string;
  organization: string;
  category: string;
  description: string;
  statusTag?: string;
}

export interface CapabilityItem {
  number: string;
  title: string;
  value: string;
  subtext: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "NITISH",
    role: "DIGITAL BUILDER",
    tagline: "I build AI systems, software products, and experimental tools.",
    descriptor: "AI / SOFTWARE / AUTOMATION / VAG AGENCY",
    subText: "21-year-old undergraduate student focused on Artificial Intelligence and software development. Building AI automation platforms, full-stack systems, and founding VAG Agency.",
    location: "Global / Remote",
    status: "Undergraduate Student & AI Builder",
    email: "laknanitish2110@gmail.com",
    socials: {
      github: "https://github.com/laknanitish2110-sudo",
      githubUser: "laknanitish2110-sudo",
      linkedin: "https://linkedin.com",
      agency: "https://vagagency.netlify.app",
    },
  },
  capabilities: [
    { number: "01", title: "CURRENTLY", value: "UNDERGRADUATE", subtext: "Focused on AI & Software Engineering" },
    { number: "02", title: "INFRASTRUCTURE", value: "SELF-HOSTED STACK", subtext: "Self-hosted workflow automation, PostgreSQL infrastructure & production deployments." },
    { number: "03", title: "STUDIO", value: "VAG AGENCY", subtext: "AI automation & software services" },
    { number: "04", title: "HACKATHONS", value: "MSME 6.0 CLEARED", subtext: "3 of 11 submissions cleared 1st filter" },
  ] as CapabilityItem[],
  about: {
    heading: "21-year-old undergraduate building AI platforms & software.",
    narrative: [
      "I am a 21-year-old undergraduate student focused on Artificial Intelligence, workflow automation, and full-stack software development. I like taking complex ideas, analyzing system architectures, and engineering tools people can actually use.",
      "My software stack leverages self-hosted workflow automation engines, Supabase PostgreSQL databases, and cloud deployments. I build systems like ARIA (AI Telecom Platform), SnapMark (AI Attendance), Cenzo (Delivery App), and run VAG Agency to offer AI automation services."
    ],
    highlights: [
      "Artificial Intelligence",
      "WhatsApp Business API",
      "n8n Workflow Engine",
      "InsightFace Face Recognition",
      "Gemini Vision & RAG",
      "Supabase PostgreSQL",
      "VAG Agency Studio"
    ]
  },
  projects: [
    {
      id: "aria",
      number: "01",
      title: "ARIA — AI Telecom Platform",
      tagline: "Full-Stack AI Platform & WhatsApp Business Integration",
      category: "Artificial Intelligence / Enterprise",
      status: "LIVE",
      year: "Jun 2026",
      description: "Full-stack AI platform with WhatsApp Business Cloud API integration. Features a 30-node n8n Hiring Bot workflow, Resume Intake & AI Screening, Universal Sender webhook, and Dealer/TSM management. Powers the VAG Agency backend.",
      image: "/images/aria.jpg?v=2",
      techStack: ["n8n", "Supabase", "WhatsApp API", "Gemini", "PostgreSQL"],
      link: "#aria-case-study",
      isFeatured: true
    },
    {
      id: "snapmark",
      number: "02",
      title: "SnapMark — AI Attendance System",
      tagline: "Face Recognition Classroom Attendance",
      category: "AI Vision / EdTech",
      status: "LIVE",
      year: "Jul 2026",
      description: "Face recognition-based classroom attendance system. One photo marks the entire class. Dean approved on 23 Jul 2026 with green light to build. Previously deployed on KVM2 VPS.",
      image: "/images/snapmark.jpg?v=2",
      techStack: ["InsightFace", "Python", "Supabase", "VPS"],
      link: "#snapmark-case-study",
      isFeatured: true
    },
    {
      id: "vag-agency",
      number: "03",
      title: "VAG Agency — AI Automation Agency",
      tagline: "Agency Website & Brand for AI Automation Services",
      category: "Digital Agency",
      status: "LIVE",
      year: "Jul 2026",
      description: "Agency website and brand selling AI automation services. Live at vagagency.netlify.app. Offers WhatsApp automation, AI hiring bots, and SnapMark attendance as services.",
      image: "/images/vag_agency.jpg?v=2",
      techStack: ["Netlify", "HTML/CSS/JS", "n8n", "WhatsApp API"],
      link: "https://vagagency.netlify.app",
      isFeatured: true
    },
    {
      id: "netra",
      number: "04",
      title: "NETRA — AI Visual Quality Inspector",
      tagline: "Photo-Based Defect Detection via WhatsApp",
      category: "AI Vision / MSME 6.0",
      status: "CLEARED",
      year: "Jul 2026",
      description: "AI visual quality inspection for MSMEs via WhatsApp. Zero-hardware pure software approach. Photo-based defect detection using Gemini Vision. Selected for screening process in MSME Idea Hackathon 6.0.",
      image: "/images/netra.jpg?v=2",
      techStack: ["Gemini Vision", "WhatsApp API", "n8n", "MSME 6.0"],
      link: "#netra",
      isFeatured: true
    },
    {
      id: "solarswap",
      number: "05",
      title: "SolarSwap — EV Energy Micro-Hub",
      tagline: "Solar-Powered EV Charging & Energy Exchange",
      category: "EV / Green Tech",
      status: "CLEARED",
      year: "Jul 2026",
      description: "Solar-powered EV charging and energy exchange micro-hub for Tier-2/3 towns. Complete proposal submitted with block diagrams, revenue projections, and breakeven analysis. MSME 6.0 first filter cleared.",
      image: "/images/solarswap.jpg?v=2",
      techStack: ["MSME 6.0", "EV / Solar", "Hardware + Software"],
      link: "#solarswap",
      isFeatured: true
    },
    {
      id: "cenzo",
      number: "06",
      title: "Cenzo — Delivery App",
      tagline: "Real-Time Order Tracking & Dispatch Platform",
      category: "Logistics / Full-Stack",
      status: "LIVE",
      year: "Jul 2026",
      description: "Delivery app featuring real-time rider tracking, automated order notifications via n8n workflows, and live map interface. Backed by Supabase PostgreSQL.",
      image: "/images/cenzo.jpg?v=2",
      techStack: ["Supabase", "n8n", "Maps API", "Real-time"],
      link: "#cenzo",
      isFeatured: true
    }
  ] as Project[],
  agency: {
    title: "VAG AGENCY",
    subtitle: "AI Automation Agency & Software Services",
    description: "Agency website and brand for selling AI automation services live at vagagency.netlify.app. We offer WhatsApp Business Cloud automation, candidate screening hiring bots, and SnapMark AI attendance solutions.",
    link: "https://vagagency.netlify.app",
    capabilities: [
      "WhatsApp Cloud API Automation",
      "AI Hiring Bot & Candidate Screening",
      "SnapMark AI Classroom Attendance",
      "Self-Hosted Workflow Automation"
    ]
  },
  experiments: [
    {
      id: "exp-1",
      title: "JARVIS Hologram — Tony Stark Room",
      category: "Voice AI & HUD",
      description: "Tony Stark-style room command center. Wall-projected or monitor sci-fi HUD with voice commands and connected AI assistant sharing Claude API brain.",
      tech: "Voice AI + Projector HUD + Claude API",
      status: "BUILDING",
      codeSnippet: `const jarvis = new RoomHUD({ brain: 'Claude API', mode: 'Holographic' });`
    },
    {
      id: "exp-2",
      title: "Personal AI Engineering Team",
      category: "Multi-Agent System",
      description: "AI system working as a personal engineering team. Solo developer framework where multiple AI agents serve as teammates for hackathons, startups, and software builds.",
      tech: "Claude Code + n8n + Multi-Agent",
      status: "BUILDING",
      codeSnippet: `const agentSwarm = new AITeammates({ orchestrator: 'n8n', model: 'Claude' });`
    },
    {
      id: "exp-3",
      title: "Custom LLM — Gap Analysis Model",
      category: "AI Research",
      description: "Researching an LLM fine-tuned to catch gaps in existing models where wrong answers have high consequences (relevant to SnapMark and SolarSwap).",
      tech: "LLM Fine-Tuning + Evaluation",
      status: "RESEARCH",
      codeSnippet: `const validator = new GapAnalysisLLM({ accuracyThreshold: 0.992 });`
    },
    {
      id: "exp-4",
      title: "ULTRON — Open-Source AI Interface",
      category: "Open Source Software",
      description: "Open-source AI interface with frontend, backend, and executable launcher (`build_exe.py`), requirements setup, and Obsidian vault integration.",
      tech: "Python + Open Source + GitHub",
      status: "BUILDING",
      codeSnippet: `python build_exe.py --target desktop --obsidian-vault true`
    },
    {
      id: "exp-5",
      title: "Document Retrieval Agent (RAG)",
      category: "Knowledge Extraction",
      description: "AI document processing system extracting key data from PDFs (e.g. Aadhaar), creating structured markdown, and linking original sources for RAG querying.",
      tech: "RAG + PDF Parsing + Supabase",
      status: "CONCEPT",
      codeSnippet: `const doc = await ragPipeline.extractPDF(aadhaarFile);`
    }
  ] as Experiment[],
  milestones: [
    {
      year: "Jul 2026",
      title: "MSME Idea Hackathon 6.0 — 3 Submissions Cleared First Filter",
      organization: "MSME Hackathon (via Vaagdevi College)",
      category: "HACKATHON CLEARED",
      statusTag: "CLEARED",
      description: "Cleared first filter for 3 projects: NETRA (AI Quality Inspector), SolarSwap (EV Micro-Hub), and ARIA for MSMEs. Stage 2 documentation requested."
    },
    {
      year: "Jul 2026",
      title: "SnapMark AI Attendance — Dean Approval",
      organization: "Vaagdevi College / Campus",
      category: "APPROVED TO BUILD",
      statusTag: "LIVE",
      description: "Dean approved face recognition classroom attendance system on 23 Jul 2026 with green light to build. Previously deployed on KVM2 VPS."
    },
    {
      year: "Jul 2026",
      title: "VAG Agency Live Launch",
      organization: "VAG Agency Studio",
      category: "AGENCY LAUNCH",
      statusTag: "LIVE",
      description: "Launched VAG Agency at vagagency.netlify.app offering WhatsApp automation, AI hiring bots, and SnapMark service listings."
    },
    {
      year: "Jun 2026",
      title: "ARIA AI Telecom Platform Deployment",
      organization: "Core Architecture",
      category: "SYSTEM DEPLOYMENT",
      statusTag: "LIVE",
      description: "Deployed ARIA full-stack AI platform integrating WhatsApp Business Cloud API, n8n 30-node hiring bot workflow, and Supabase Postgres DB."
    },
    {
      year: "Earlier",
      title: "Recycled Asphalt Pavements — MSME 5.0 Submission",
      organization: "MSME 5.0 Hackathon",
      category: "GREEN TECH SUBMISSION",
      statusTag: "SUBMITTED",
      description: "Submitted green tech infrastructure proposal for reusing demolished road materials with physical schematic and cost analysis."
    }
  ] as Milestone[]
};
