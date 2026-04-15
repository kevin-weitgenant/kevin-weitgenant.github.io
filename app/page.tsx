import { ProjectCard } from "@/components/project-card"
import { PROJECTS } from "@/constants/projects"
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
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
