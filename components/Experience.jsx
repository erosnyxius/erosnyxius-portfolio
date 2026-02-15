"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Junior Software Engineer",
    company: "Zipto",
    location: "Banani, Dhaka, Bangladesh",
    period: "Jan, 2026 - Present",
    description:
      "Leading development of enterprise-scale applications. Architecting microservices and implementing CI/CD pipelines. Mentoring junior developers and conducting code reviews.",
    skills: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
  },
  {
    title: "Intern",
    company: "Lynkeus AI - 린케우스",
    location: "Gulshan 2, Dhaka, Bangladesh",
    period: "Feb 2024 - April 2025",
    description:
      "Collaborated on developing a desktop-based real-time Pedestrian Detection prototype. Supported the optimization of License Plate Recognition (LPR) models by managing data pre-processing, image annotation, and conducting inference tests. Maintained accurate technical documentation to streamline team development workflows.",
    skills: [ "Python", "PyQt5", "OpenCV", "Numpy", "YOLOv8", "Roboflow", "Git"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            My professional journey through the tech industry
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-4 sm:space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group hover:border-foreground/20"
            >
              {/* Subtle gradient accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-foreground/20 to-transparent" />

              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
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
