export default function Footer() {
  return (
    <footer className="w-full bg-background text-foreground py-12 px-8 md:px-28 border-t border-border/10 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Left Section */}
      <span className="text-muted-foreground text-sm font-medium">
        © 2026 Mindloop. All rights reserved.
      </span>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {["Privacy", "Terms", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-muted-foreground text-sm font-medium hover:text-foreground transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}
