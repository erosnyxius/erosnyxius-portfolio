"use client";

import { ExternalLink, Github, Folder } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and analytics dashboard.",
    image: null,
    tags: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team workspaces, and Kanban boards.",
    image: null,
    tags: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "AI Content Generator",
    description:
      "AI-powered content generation tool using GPT models for creating marketing copy, blog posts, and social media content.",
    image: null,
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Real-time Chat Application",
    description:
      "Feature-rich chat application with video calls, file sharing, and end-to-end encryption.",
    image: null,
    tags: ["Socket.io", "WebRTC", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Portfolio Analytics",
    description:
      "Investment portfolio tracker with real-time market data and performance analytics.",
    image: null,
    tags: ["Vue.js", "Python", "D3.js", "Alpha Vantage API"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather application with location-based forecasts and interactive maps.",
    image: null,
    tags: ["React", "OpenWeather API", "Mapbox", "Chart.js"],
    github: "#",
    live: "#",
    featured: false,
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            A selection of projects I&apos;ve worked on, showcasing my skills in
            full-stack development and design.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="group hover:border-foreground/30 transition-all duration-300 overflow-hidden"
            >
              {/* Project Image Placeholder */}
              <div className="h-40 sm:h-48 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Folder className="w-12 h-12 sm:w-16 sm:h-16 text-gray-600" />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button asChild variant="secondary" size="sm">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
