"use client";

import { Badge } from "@/components/ui/badge";

const techCategories = [
  {
    name: "Frontend",
    techs: [
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "Vue.js", level: "Advanced" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Framer Motion", level: "Advanced" },
    ],
  },
  {
    name: "Backend",
    techs: [
      { name: "Node.js", level: "Expert" },
      { name: "Python", level: "Advanced" },
      { name: "Express.js", level: "Expert" },
      { name: "FastAPI", level: "Advanced" },
      { name: "GraphQL", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
    ],
  },
  {
    name: "Database",
    techs: [
      { name: "PostgreSQL", level: "Expert" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Redis", level: "Advanced" },
      { name: "Prisma", level: "Expert" },
      { name: "Firebase", level: "Advanced" },
      { name: "Supabase", level: "Advanced" },
    ],
  },
  {
    name: "DevOps & Tools",
    techs: [
      { name: "Docker", level: "Advanced" },
      { name: "AWS", level: "Advanced" },
      { name: "Git", level: "Expert" },
      { name: "CI/CD", level: "Advanced" },
      { name: "Vercel", level: "Expert" },
      { name: "Linux", level: "Advanced" },
    ],
  },
];

const getLevelColor = (level) => {
  switch (level) {
    case "Expert":
      return "bg-foreground/20 text-foreground border-foreground/30";
    case "Advanced":
      return "bg-muted text-muted-foreground border-border";
    default:
      return "bg-secondary text-secondary-foreground border-border";
  }
};

export default function TechStacks() {
  return (
    <section id="tech" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tech Stacks
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="p-4 sm:p-6 rounded-xl border border-border bg-card/50 hover:border-foreground/20 transition-colors duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.techs.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    className={`${getLevelColor(tech.level)} transition-all duration-200 hover:scale-105 text-xs sm:text-sm`}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
