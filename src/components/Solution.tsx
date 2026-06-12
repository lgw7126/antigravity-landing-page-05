import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Solution() {
  const features = [
    {
      title: "Curated Feed",
      description:
        "An algorithm that respects your time. No infinite scrolling, no ragebait. Only high-signal content tailored to your curiosities.",
    },
    {
      title: "Writer Tools",
      description:
        "A minimal editor designed for focus. Markdown support, beautiful serif typography, and powerful email delivery systems built-in.",
    },
    {
      title: "Community",
      description:
        "Engage in deep, moderated comment threads. Connect with other curious minds in dedicated discussion spaces for each issue.",
    },
    {
      title: "Distribution",
      description:
        "Seamlessly publish to the web and email inbox simultaneously. Build your audience on a platform you completely control.",
    },
  ];

  return (
    <section className="w-full bg-background text-foreground px-8 md:px-28 py-32 md:py-44 border-t border-border/30 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        {/* Solution Label */}
        <motion.div
          className="text-xs tracking-[3px] uppercase text-muted-foreground mb-4"
          {...fadeUp(0.1)}
        >
          SOLUTION
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-medium tracking-tight mb-16 leading-[1.15]"
          {...fadeUp(0.25)}
        >
          The platform for <span className="font-serif italic font-normal">meaningful</span> content
        </motion.h2>

        {/* Wide Loop Video */}
        <motion.div
          className="w-full aspect-[3/1] rounded-2xl overflow-hidden mb-20 relative bg-black/40 border border-border/10"
          {...fadeUp(0.4)}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>

        {/* 4-Column Feature Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.title}
              className="flex flex-col gap-3"
              {...fadeUp(0.15 * (idx + 1))}
            >
              <h3 className="font-semibold text-base tracking-tight">
                {feat.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
