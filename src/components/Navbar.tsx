import React from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-28 py-6 bg-transparent">
      {/* Left / Center-Left section */}
      <div className="flex items-center gap-12">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-7 h-7 rounded-full border-2 border-foreground/60 transition-transform duration-300 group-hover:scale-105">
            <div className="w-3 h-3 rounded-full border border-foreground/60" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Mindloop
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-3 text-sm font-medium">
          {["Home", "How It Works", "Philosophy", "Use Cases"].map((link, idx) => (
            <React.Fragment key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link}
              </a>
              {idx < 3 && <span className="text-muted-foreground/30">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Right Section: Socials */}
      <div className="flex items-center gap-3">
        {[
          { icon: Instagram, url: "https://instagram.com" },
          { icon: Linkedin, url: "https://linkedin.com" },
          { icon: Twitter, url: "https://twitter.com" },
        ].map(({ icon: Icon, url }, idx) => (
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass flex items-center justify-center w-10 h-10 rounded-full transition-all hover:scale-105 duration-200 text-muted-foreground hover:text-foreground"
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </nav>
  );
}
