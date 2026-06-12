import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlighted?: boolean;
}

function Word({ children, progress, range, isHighlighted }: WordProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.25em] select-none ${
        isHighlighted
          ? "text-foreground font-semibold"
          : "text-hero-subtitle/60"
      }`}
    >
      {children}
    </motion.span>
  );
}

export default function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll of the mission section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const p1Text = "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having.";
  const p2Text = "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved.";

  const p1Words = p1Text.split(" ");
  const p2Words = p2Text.split(" ");

  const totalWords = p1Words.length + p2Words.length;

  // Words to highlight in paragraph 1
  const highlightWords = ["curiosity", "meets", "clarity"];

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-background text-foreground px-8 md:px-28 pt-0 pb-32 md:pb-44 flex flex-col items-center"
    >
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        {/* Centered large video (mocking 800x800 visually inside layout) */}
        <motion.div
          className="w-full max-w-[500px] aspect-square rounded-3xl overflow-hidden mb-16 relative bg-black/40 border border-border/10"
          {...fadeUp(0.1)}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>

        {/* Paragraph 1 */}
        <div className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-[1.25] mb-8 text-center">
          {p1Words.map((word, idx) => {
            const start = idx / totalWords;
            const end = Math.min(1, start + 0.15); // slightly stretched range for transition padding
            
            // Clean punctuation for matching highlights
            const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()—]/g, "").trim();
            const isHighlighted = highlightWords.includes(cleanWord.toLowerCase());

            return (
              <Word
                key={`p1-${idx}`}
                progress={scrollYProgress}
                range={[start, end]}
                isHighlighted={isHighlighted}
              >
                {word}
              </Word>
            );
          })}
        </div>

        {/* Paragraph 2 */}
        <div className="text-xl md:text-2xl lg:text-3xl font-medium leading-[1.35] mt-10 text-center">
          {p2Words.map((word, idx) => {
            const absoluteIdx = p1Words.length + idx;
            const start = absoluteIdx / totalWords;
            const end = Math.min(1, start + 0.15);

            return (
              <Word
                key={`p2-${idx}`}
                progress={scrollYProgress}
                range={[start, end]}
                isHighlighted={false}
              >
                {word}
              </Word>
            );
          })}
        </div>
      </div>
    </section>
  );
}
