"use client";

import Image from "next/image";
import { Code, Palette, Rocket, Shield, Smartphone, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building responsive, performant web applications using modern frameworks and best practices.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive user interfaces with a focus on user experience and accessibility.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications that deliver native-like experiences.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Improving application speed and efficiency through code optimization and caching strategies.",
  },
  {
    icon: Shield,
    title: "Security Implementation",
    description:
      "Implementing robust security measures to protect your data and users.",
  },
  {
    icon: Zap,
    title: "API Development",
    description:
      "Designing and building scalable RESTful and GraphQL APIs for seamless integrations.",
  },
];

const processSteps = [
  {
    image: "/steps/Step1.png",
    step: "01",
    title: "Discovery & Research",
    description: "Understanding your vision, goals, and target audience through in-depth research and analysis.",
  },
  {
    image: "/steps/Step2.png",
    step: "02",
    title: "Planning & Strategy",
    description: "Creating detailed roadmaps, wireframes, and technical specifications for your project.",
  },
  {
    image: "/steps/Step3.png",
    step: "03",
    title: "Design & Development",
    description: "Bringing ideas to life with clean code, modern design, and iterative development.",
  },
  {
    image: "/steps/Step4.png",
    step: "04",
    title: "Launch & Support",
    description: "Deploying your project and providing ongoing support to ensure continued success.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Process Section - Alternating Left-Right with Curved Lines */}
        <div className="mb-20 sm:mb-28">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-border bg-secondary/50 text-[10px] sm:text-xs font-medium text-muted-foreground mb-3 sm:mb-4">
              WORKFLOW
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              My Strategy
            </h3>
          </div>

          {/* Process Steps with Curved Connections */}
          <div className="relative max-w-6xl mx-auto px-4 sm:px-0">
            {/* Steps */}
            <div className="relative z-10">
              {processSteps.map((item, index) => {
                const isEven = index % 2 === 0;
                const isLast = index === processSteps.length - 1;
                return (
                  <div key={index} className="relative">
                    {/* Curved Connector Line */}
                    {!isLast && (
                      <div className="absolute left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] h-[150px] sm:h-[200px] pointer-events-none" style={{ top: '70%' }}>
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 400 200"
                          fill="none"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient id={`curveGrad${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                              <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
                              <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
                            </linearGradient>
                          </defs>
                          {isEven ? (
                            <path
                              d="M 50 0 Q 50 100, 200 100 Q 350 100, 350 200"
                              stroke={`url(#curveGrad${index})`}
                              strokeWidth="2"
                              strokeDasharray="10 10"
                              fill="none"
                            />
                          ) : (
                            <path
                              d="M 350 0 Q 350 100, 200 100 Q 50 100, 50 200"
                              stroke={`url(#curveGrad${index})`}
                              strokeWidth="2"
                              strokeDasharray="10 10"
                              fill="none"
                            />
                          )}
                        </svg>
                      </div>
                    )}

                    <div
                      className={`flex flex-row items-center gap-4 sm:gap-8 md:gap-16 ${
                        isEven ? "flex-row" : "flex-row-reverse"
                      } pb-16 sm:pb-20 md:pb-24`}
                    >
                      {/* Image */}
                      <div className="w-1/2">
                        <div
                          className={`flex ${
                            isEven ? "justify-end pr-2 sm:pr-4 md:pr-8" : "justify-start pl-2 sm:pl-4 md:pl-8"
                          }`}
                        >
                          <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl sm:rounded-3xl overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Text Content */}
                      <div
                        className={`w-1/2 ${
                          isEven ? "text-left pl-2 sm:pl-4 md:pl-8" : "text-right pr-2 sm:pr-4 md:pr-8"
                        }`}
                      >
                        <div className="space-y-1 sm:space-y-2 md:space-y-4">
                          <span className="inline-block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground/40">
                            {item.step}
                          </span>
                          <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Services
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Comprehensive digital solutions tailored to your needs. From concept
            to deployment, I&apos;ve got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-foreground/20 transition-all duration-300 bg-card/50"
            >
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary border border-border flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-foreground/10 transition-colors duration-300">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                </div>
                <CardTitle className="text-base sm:text-lg">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
