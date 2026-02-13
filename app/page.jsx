"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TechStacks from "@/components/TechStacks";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Modern SaaS Background Effects */}
      <div className="saas-bg" />
      <div className="grid-pattern" />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <Services />
        <TechStacks />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
