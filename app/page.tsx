import { ProjectCard } from "@/components/project-card"
import { Github, Linkedin } from "lucide-react"
import { XIcon } from "@/components/x-icon"
import Image from "next/image"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
        {/* Header */}
        <header className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Profile Image */}
            <div className="shrink-0">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-border">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Kevin Castro Weitgenant"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
                Kevin Castro Weitgenant
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
                Applied AI / Generative AI Engineer · Full-Stack Developer
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl mb-8">
                I build applications end-to-end (idea, design, backend,
                frontend, deployment) using modern web technologies and applied
                AI.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 items-center">
                <a
                  href="https://x.com/KevinWeitgenant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="X (Twitter)"
                >
                  <XIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/kevin-weitgenant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kevin-weitgenant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>

          <div className="space-y-12">
            <ProjectCard
              title="LinkedIn Job Hunter"
              description="AI-powered Chrome extension that discovers job opportunities hidden in LinkedIn posts. Searches posts via the LinkedIn API, filters noise with AI, extracts structured job data, and monitors for new opportunities in the background."
              technologies={[
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
              ]}
              githubUrl="https://github.com/kevin-weitgenant/linkedin-job-hunter"
              liveUrl="https://chromewebstore.google.com/detail/posts-job-hunter-for-link/pchoidhnbdjchhopafgfkijjeomnandl?authuser=0&hl=en"
              imageUrl="/Gemini_Generated_Image_uml9emuml9emuml9.png"
            />

            <ProjectCard
              title="YT Learn"
              description="Chat with YouTube videos for free using Chrome’s built-in Gemini Nano AI. Select specific chapters to focus your questions, keep everything private/on-device, and chat with multiple videos across tabs."
              technologies={[
                "Plasmo",
                "React",
                "TypeScript",
                "Zustand",
                "Gemini Nano",
              ]}
              githubUrl="https://github.com/kevin-weitgenant/YT-learn"
              liveUrl="https://chromewebstore.google.com/detail/yt-learn/kilhldjihchdppcmkknhnccmahjjffgk"
              imageUrl="https://img.youtube.com/vi/5KM-zwCP6eI/hqdefault.jpg"
            />

            <ProjectCard
              title="Baymax (Berkeley AgentX Hackathon)"
              description="Conversational AI agent for structured symptom documentation. Built during the Berkeley AgentX Hackathon. Guides users through a schema-driven dialogue, supports multiple symptom threads with persistence."
              technologies={[
                "Python",
                "LangChain",
                "LangGraph",
                "SQLite",
                "Gradio",
                "FastAPI",
                "Expo",
                "Qdrant",
                "RAG",
              ]}
              githubUrl="https://github.com/joohyeon/baymax_team_collab"
              liveUrl="https://www.youtube.com/watch?v=vYhTR5bH-sc"
            />

            <ProjectCard
              title="LinkedIn Posts Hunter (MCP Server)"
              description="Model Context Protocol (MCP) server for automating LinkedIn post searching and tracking via your AI assistant (Cursor/Claude). Uses Playwright for authenticated scraping, stores everything locally in SQLite, and includes a React dashboard for filtering and application tracking."
              technologies={[
                "TypeScript",
                "MCP",
                "Playwright",
                "SQLite",
                "React",
                "Express",
                "Vite",
                "TailwindCSS",
              ]}
              githubUrl="https://github.com/kevin-weitgenant/LinkedIn-Posts-Hunter-MCP-Server"
              liveUrl="https://streamable.com/m6tvef?src=player-page-share"
            />

            <ProjectCard
              title="Nano Tutor"
              description="On-device Chrome extension that transforms YouTube videos into interactive learning. Built for the Google Chrome Built-in AI Challenge. Chat with videos and generate quizzes privately using Gemini Nano, with a lightweight RAG pipeline (local embeddings + vector search) for long transcripts."
              technologies={[
                "TypeScript",
                "React",
                "Plasmo",
                "Gemini Nano",
                "Transformers.js",
                "WebGPU",
                "IndexedDB",
                "RAG",
              ]}
              githubUrl="https://github.com/kevin-weitgenant/nano-tutor"
              liveUrl="https://devpost.com/software/videolearnai"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
