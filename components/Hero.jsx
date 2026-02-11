"use client";

import { Sparkles, Database, Workflow, Cloud, Zap, Server, Globe, Terminal, Braces, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 pt-16 overflow-hidden">
      {/* Modern SaaS Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Database Icon - Top Left */}
        <div className="absolute top-24 sm:top-28 left-[6%] sm:left-[10%] animate-float opacity-50 sm:opacity-60">
          <div className="w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl border border-gray-700/50 shadow-2xl shadow-black/50 flex items-center justify-center">
            <Database className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
          </div>
        </div>

        {/* API Card - Top Right */}
        <div className="absolute top-20 sm:top-24 right-[6%] sm:right-[10%] animate-float-delayed opacity-40 sm:opacity-50">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl border border-gray-700/50 shadow-2xl shadow-black/50 p-3 sm:p-4 w-28 sm:w-36">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <Braces className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              <span className="text-[10px] sm:text-xs font-mono text-gray-400">API</span>
            </div>
            <div className="space-y-1 sm:space-y-1.5">
              <div className="h-1 sm:h-1.5 bg-gray-700 rounded-full w-full" />
              <div className="h-1 sm:h-1.5 bg-gray-700 rounded-full w-2/3" />
              <div className="h-1 sm:h-1.5 bg-gray-600 rounded-full w-4/5" />
            </div>
          </div>
        </div>

        {/* Automation Workflow - Middle Left */}
        <div className="absolute top-[38%] sm:top-[40%] left-[4%] sm:left-[6%] animate-float opacity-35 sm:opacity-45 hidden sm:block">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 w-28 sm:w-36">
            <div className="flex items-center gap-2 mb-2">
              <Workflow className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
              <span className="text-[10px] sm:text-xs font-medium text-gray-600">Automation</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-gray-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-500 rounded-sm" />
              </div>
              <div className="flex-1 h-0.5 bg-gray-400" />
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-gray-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-500 rounded-sm" />
              </div>
              <div className="flex-1 h-0.5 bg-gray-400" />
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-gray-400 flex items-center justify-center">
                <Zap className="w-2.5 h-2.5 text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Cloud - Top Center Left */}
        <div className="absolute top-32 sm:top-36 left-[22%] sm:left-[26%] animate-float-delayed opacity-25 sm:opacity-35">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg sm:rounded-xl border border-gray-600/30 shadow-xl flex items-center justify-center">
            <Cloud className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          </div>
        </div>

        {/* Server - Right Side Middle */}
        <div className="absolute top-[42%] sm:top-[45%] right-[6%] sm:right-[8%] animate-float opacity-35 sm:opacity-45">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl border border-gray-700/50 shadow-2xl shadow-black/50 p-3 sm:p-4">
            <Server className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500" />
          </div>
        </div>

        {/* Terminal - Bottom Left */}
        <div className="absolute bottom-[28%] sm:bottom-[30%] left-[8%] sm:left-[12%] animate-float opacity-40 sm:opacity-50">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl border border-gray-700/50 shadow-2xl shadow-black/50 p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3">
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <div className="space-y-1">
              <div className="h-1 sm:h-1.5 bg-gray-700 rounded w-12 sm:w-16" />
              <div className="h-1 sm:h-1.5 bg-gray-600 rounded w-8 sm:w-12" />
            </div>
          </div>
        </div>

        {/* Globe - Bottom Right */}
        <div className="absolute bottom-[26%] sm:bottom-[28%] right-[10%] sm:right-[14%] animate-float-delayed opacity-35 sm:opacity-45">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl sm:rounded-2xl border border-gray-600/30 shadow-2xl flex items-center justify-center">
            <Globe className="w-5 h-5 sm:w-7 sm:h-7 text-gray-500" />
          </div>
        </div>

        {/* Layers - Top Center Right */}
        <div className="absolute top-28 sm:top-32 right-[24%] sm:right-[28%] animate-float opacity-25 sm:opacity-35">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg sm:rounded-xl border border-gray-600/30 shadow-xl flex items-center justify-center">
            <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center space-y-6 sm:space-y-8 max-w-4xl z-10 px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border bg-secondary/50 text-xs sm:text-sm text-muted-foreground">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Available for new opportunities</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
          Creative Developer
          <br />
          <span className="text-gradient">& Designer</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
          I craft beautiful digital experiences with modern technologies.
          Passionate about creating intuitive interfaces and scalable solutions
          that make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
          <Button asChild size="sm" className="px-4 py-2 text-xs sm:text-sm sm:px-6 sm:py-2.5">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild variant="outline" size="sm" className="px-4 py-2 text-xs sm:text-sm sm:px-6 sm:py-2.5">
            <a href="#contact">Let&apos;s Talk</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
