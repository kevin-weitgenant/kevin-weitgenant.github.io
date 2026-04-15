export interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
}

export const PROJECTS: Project[] = [
  {
    title: "Gen Canvas",
    description: "An open-source infinite canvas whiteboard with AI-powered image generation. Generate, compare, and organize images freely on a canvas with AI-powered prompt enhancement. Built as an extensible OSS alternative to Mixboard.",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "FastAPI",
      "Python",
      "Groq",
      "Llama 3.3",
      "SSE",
      "Docker",
    ],
    githubUrl: "https://github.com/kevin-weitgenant/gen-canvas-OSS-mixboard",
    liveUrl: "https://gencanvas.onrender.com",
  },
  {
    title: "Find jobs in Linkedin posts",
    description:
      "AI-powered Chrome extension that discovers job opportunities hidden in LinkedIn posts. Searches posts via the LinkedIn API, filters noise with AI, extracts structured job data, and monitors for new opportunities in the background.",
    technologies: [
      "Plasmo",
      "React",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "Dexie.js",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Groq",
      "OpenAI",
    ],
    githubUrl: "https://github.com/kevin-weitgenant/linkedin-job-hunter",
    liveUrl: "https://www.findjobsinposts.com",
    imageUrl:
      "https://lh3.googleusercontent.com/TDVNLEsU6MvyyXWRc_OVjCW8Hzel7w23LUT_DPZxuaYvWHVZ8zjf4PimHbqK4AMRnAx2ID0BJkk8ybe4Ptouzpl5MyE=s550-w550-h350",
  },
  {
    title: "YT Learn",
    description:
      "Chat with YouTube videos for free using Chrome's built-in Gemini Nano AI. Select specific chapters to focus your questions, keep everything private/on-device, and chat with multiple videos across tabs.",
    technologies: ["Plasmo", "React", "TypeScript", "Zustand", "Gemini Nano"],
    githubUrl: "https://github.com/kevin-weitgenant/YT-learn",
    liveUrl:
      "https://chromewebstore.google.com/detail/yt-learn/kilhldjihchdppcmkknhnccmahjjffgk",
    imageUrl: "https://img.youtube.com/vi/5KM-zwCP6eI/hqdefault.jpg",
  },
  {
    title: "Baymax (Berkeley AgentX Hackathon)",
    description:
      "Conversational AI agent for structured symptom documentation. Built during the Berkeley AgentX Hackathon. Guides users through a schema-driven dialogue, supports multiple symptom threads with persistence.",
    technologies: [
      "Python",
      "LangChain",
      "LangGraph",
      "SQLite",
      "Gradio",
      "FastAPI",
      "Expo",
      "Qdrant",
      "RAG",
    ],
    githubUrl: "https://github.com/joohyeon/baymax_team_collab",
    liveUrl: "https://www.youtube.com/watch?v=vYhTR5bH-sc",
    imageUrl: "/max.png",
  },
  {
    title: "LinkedIn Posts Hunter (MCP Server)",
    description:
      "Model Context Protocol (MCP) server for automating LinkedIn post searching and tracking via your AI assistant (Cursor/Claude). Uses Playwright for authenticated scraping, stores everything locally in SQLite, and includes a React dashboard for filtering and application tracking.",
    technologies: [
      "TypeScript",
      "MCP",
      "Playwright",
      "SQLite",
      "React",
      "Express",
      "Vite",
      "TailwindCSS",
    ],
    githubUrl:
      "https://github.com/kevin-weitgenant/LinkedIn-Posts-Hunter-MCP-Server",
    liveUrl: "https://streamable.com/m6tvef?src=player-page-share",
    imageUrl:
      "https://github.com/kevin-weitgenant/LinkedIn-Posts-Hunter-MCP-Server/raw/main/saitama-job-hunting.png",
  },
  {
    title: "Nano Tutor",
    description:
      "On-device Chrome extension that transforms YouTube videos into interactive learning. Built for the Google Chrome Built-in AI Challenge. Chat with videos and generate quizzes privately using Gemini Nano, with a lightweight RAG pipeline (local embeddings + vector search) for long transcripts.",
    technologies: [
      "TypeScript",
      "React",
      "Plasmo",
      "Gemini Nano",
      "Transformers.js",
      "WebGPU",
      "IndexedDB",
      "RAG",
    ],
    githubUrl: "https://github.com/kevin-weitgenant/nano-tutor",
    liveUrl: "https://devpost.com/software/videolearnai",
  },
];
