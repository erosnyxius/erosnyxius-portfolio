"use client";

import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    period: "2017 - 2019",
    description:
      "Specialized in Artificial Intelligence and Human-Computer Interaction. Research focused on machine learning applications in user experience design.",
    achievements: ["Dean's List", "Research Assistant", "GPA: 3.9/4.0"],
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "MIT",
    period: "2013 - 2017",
    description:
      "Comprehensive education in software development, algorithms, and system design. Active member of the Computer Science Society.",
    achievements: ["Summa Cum Laude", "Hackathon Winner", "GPA: 3.8/4.0"],
  },
];

const certifications = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google",
    year: "2022",
  },
  {
    name: "Meta Frontend Developer",
    issuer: "Meta",
    year: "2022",
  },
  {
    name: "MongoDB Developer",
    issuer: "MongoDB",
    year: "2021",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            My academic background and professional certifications that have
            shaped my expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-secondary border border-border">
                <GraduationCap className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Academic Background
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:border-foreground/20 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-lg">{edu.degree}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <BookOpen className="w-4 h-4" />
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground whitespace-nowrap">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {edu.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-secondary border border-border">
                <Award className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="hover:border-foreground/20 transition-colors bg-card/50"
                >
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center">
                          <Award className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">
                            {cert.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline">{cert.year}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Note */}
            <div className="mt-8 p-6 rounded-xl border border-border bg-gradient-to-br from-secondary/50 to-transparent">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">
                  Continuous Learning:{" "}
                </span>
                I believe in staying updated with the latest technologies and
                best practices through continuous learning and professional
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
