import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function SearchHasChanged() {
  const cards = [
    {
      name: "ChatGPT",
      icon: "/icon-chatgpt.png",
      description:
        "The conversational canvas where complex inquiries become refined dialectic insights. Prompting has replaced seeking.",
    },
    {
      name: "Perplexity AI",
      icon: "/icon-perplexity.png",
      description:
        "Real-time synthesis that references the web instantly. Direct answers bypassing index tables and banner ads.",
    },
    {
      name: "Google Gemini",
      icon: "/icon-google.png",
      description:
        "Multi-modal reasoning mapping massive contextual windows. Search is no longer keywords, but deep conceptual logic.",
    },
  ];

  return (
    <section className="w-full bg-background text-foreground px-8 md:px-28 pt-52 md:pt-64 pb-6 md:pb-9 flex flex-col items-center">
      <div className="max-w-7xl w-full text-center">
        {/* Heading */}
        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] leading-[1.05] mb-6"
          {...fadeUp(0.1)}
        >
          Search has <span className="font-serif italic font-normal">changed.</span> Have you?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-24 leading-relaxed"
          {...fadeUp(0.25)}
        >
          The interface to human knowledge has fundamentally shifted. We no longer sift through pages of blue links — we demand synthesized clarity, curated depth, and direct answers.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20">
          {cards.map((card, idx) => (
            <motion.div
              key={card.name}
              className="liquid-glass rounded-2xl p-8 flex flex-col items-center text-center transition-all hover:scale-[1.02] duration-300"
              {...fadeUp(0.15 * (idx + 1))}
            >
              <div className="w-48 h-48 flex items-center justify-center mb-6 overflow-hidden rounded-xl bg-black/40">
                <img
                  src={card.icon}
                  alt={`${card.name} Icon`}
                  className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
              <h3 className="font-semibold text-base mb-3 tracking-tight">
                {card.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <motion.div
          className="text-muted-foreground text-sm tracking-wide uppercase font-medium"
          {...fadeUp(0.6)}
        >
          If you don't answer the questions, someone else will.
        </motion.div>
      </div>
    </section>
  );
}
