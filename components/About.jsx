"use client";

import { User, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Get to know me better - my background, passions, and what drives me
            to create exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image/Avatar Section */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-2xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 border border-border shadow-2xl shadow-black/50 flex items-center justify-center overflow-hidden">
                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                  <User className="w-24 h-24 sm:w-32 sm:h-32 text-gray-400" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 animate-float" />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-500/20 to-gray-600/20 rounded-xl border border-gray-500/20 animate-float-delayed" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-5 sm:space-y-6 text-center md:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                Hello, I&apos;m a Creative Developer
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I&apos;m a passionate full-stack developer and designer with over 5 years
                of experience building modern web applications. I specialize in
                creating intuitive user interfaces and robust backend systems
                that scale.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                My journey in tech started with a curiosity about how things
                work, which evolved into a career dedicated to crafting digital
                solutions that make people&apos;s lives easier. I believe in clean
                code, thoughtful design, and continuous learning.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Card className="bg-secondary/50">
                <CardContent className="p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-background">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Location</p>
                    <p className="text-xs sm:text-sm font-medium text-foreground">San Francisco, CA</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-secondary/50">
                <CardContent className="p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-background">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Experience</p>
                    <p className="text-xs sm:text-sm font-medium text-foreground">5+ Years</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
