"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Tech", href: "#tech" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
            : isOpen ? "bg-transparent" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <nav className="relative flex items-center justify-center h-14 sm:h-16">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 xl:px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden absolute right-4 sm:right-6 w-10 h-10 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-foreground transition-all duration-300 ${
                    isOpen ? "top-2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 w-6 h-0.5 bg-foreground transition-all duration-300 ${
                    isOpen ? "opacity-0 scale-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-foreground transition-all duration-300 ${
                    isOpen ? "top-2 -rotate-45" : "top-4"
                  }`}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation - Full Screen Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[55] bg-background transition-all duration-500 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative flex flex-col h-full pt-24 pb-8 px-6">
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center -mt-16">
            <div className="space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between py-4 border-b border-border/20 transition-all duration-500 ${
                    isOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: isOpen ? `${100 + index * 50}ms` : "0ms" }}
                >
                  <span className="text-2xl sm:text-3xl font-medium text-foreground group-hover:text-foreground/70 transition-colors">
                    {link.name}
                  </span>
                  <ArrowRight 
                    size={20} 
                    className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
