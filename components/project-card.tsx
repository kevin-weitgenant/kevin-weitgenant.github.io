import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
}

export function ProjectCard({ title, description, technologies, githubUrl, liveUrl, imageUrl }: ProjectCardProps) {
  const hasImage = !!imageUrl

  return (
    <Card className="overflow-hidden border-border bg-card">
      <div className={hasImage ? "grid md:grid-cols-2 gap-0" : "flex flex-col"}>
        {/* Image Section */}
        {hasImage && (
          <div className="relative h-64 md:h-auto bg-muted">
            <Image src={imageUrl} alt={title} fill className="object-cover" />
          </div>
        )}

        {/* Content Section */}
        <div className="p-6 md:p-8 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-balance">{title}</h3>
            <p className={`text-muted-foreground leading-relaxed mb-6 ${!hasImage ? "max-w-3xl" : ""}`}>
              {description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                View Code
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
