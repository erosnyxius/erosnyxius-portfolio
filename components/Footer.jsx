"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-7xl">
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-foreground/10 border border-border flex items-center justify-center">
              <span className="text-sm font-bold text-foreground">P</span>
            </div>
            <span className="text-sm font-medium text-foreground">Portfolio</span>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-4 sm:gap-6 order-3 md:order-2">
            <a
              href="#about"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 order-2 md:order-3">
            © {currentYear} Made with{" "}
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-red-500" /> All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
